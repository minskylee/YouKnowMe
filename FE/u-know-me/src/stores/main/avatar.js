import { defineStore } from 'pinia'
import * as THREE from "three";
import * as GLTF from "three/examples/jsm/loaders/GLTFLoader";
import * as OrbitControls from "three/examples/jsm/controls/OrbitControls";
import * as VRMUtils from "@pixiv/three-vrm";
import { useAccountStore } from '../land/account';

export const useAvatarStore = defineStore('avatar', {
  state: () => ({
    avatarMan: [
      { id: 11, name: '유노', image: require('@/assets/main/boy1.png') },
      { id: 12, name: '보디다르마', image: require('@/assets/main/boy2.png') },
      { id: 13, name: '금태양', image: require('@/assets/main/boy3.png') },
      { id: 14, name: '클라디우스', image: require('@/assets/main/boy4.png') },
      { id: 15, name: '키츠네', image: require('@/assets/main/boy5.png') },
      { id: 16, name: '블랙', image: require('@/assets/main/boy6.png') },
    ],
    avatarWoman: [
      { id: 21, name: '미', image: require('@/assets/main/girl1.png') },
      { id: 22, name: '마땡이', image: require('@/assets/main/girl2.png') },
      { id: 23, name: '유미', image: require('@/assets/main/girl3.png') },
      { id: 24, name: '홍찌', image: require('@/assets/main/girl4.png') },
      { id: 25, name: '보리', image: require('@/assets/main/girl5.png') },
      { id: 26, name: '도레미', image: require('@/assets/main/girl6.png') },
    ],
    avatarProgress: 0,
  }),
  getters: {

  },
  actions: {
    load(id) {
      //유저 아바타 변경 api 호출
      var idJson = new Object();
      idJson.avatarSeq = id;
      JSON.stringify(idJson);
      useAccountStore().changeAvatar(idJson);
      //three
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.domElement.id = "nowAvatar";

      document.getElementById("nowAvatarDiv").append(renderer.domElement);

      // camera
      const orbitCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      orbitCamera.position.set(0.0, 1.4, 0.7);

      // window resize
      window.onresize = function () {
        orbitCamera.aspect = window.innerWidth / window.innerHeight;
        orbitCamera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      // controls
      const orbitControls = new OrbitControls.OrbitControls(
        orbitCamera,
        renderer.domElement
      );
      orbitControls.enableDamping = true;
      orbitControls.target.set(0.0, 1.4, 0.0);
      orbitControls.enablePan = false;
      orbitControls.maxDistance = 1;
      orbitControls.minDistance = 0.5;
      orbitControls.minPolarAngle = 1;
      orbitControls.maxPolarAngle = 2.5;
      orbitControls.minAzimuthAngle = -1;
      orbitControls.maxAzimuthAngle = 1;


      // light
      const light = new THREE.DirectionalLight(0xffffff);
      light.position.set(1.0, 1.0, 1.0).normalize();
      scene.add(light);

      /* THREEJS WORLD SETUP */
      let currentVrm;

      // Main Render Loop
      const clock = new THREE.Clock();

      function animate() {
        requestAnimationFrame(animate);

        if (currentVrm) {
          // Update model to render physics
          currentVrm.update(clock.getDelta());
        }
        renderer.render(scene, orbitCamera);

        orbitControls.update();
      }
      animate();

      // Import Character VRM
      const loader = new GLTF.GLTFLoader();
      loader.crossOrigin = "anonymous";

      // Import model from URL, add your own model here
      loader.load(
        // "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2FAshtra.vrm?v=1630342336981",
        "vrm/" + id + ".vrm",

        (gltf) => {
          VRMUtils.VRMUtils.removeUnnecessaryJoints(gltf.scene);

          VRMUtils.VRM.from(gltf).then((vrm) => {

            vrm.humanoid.setPose({
              [VRMUtils.VRMSchema.HumanoidBoneName.LeftShoulder]: {
                rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.0, 0.0, 0.2)).toArray()
              },
              [VRMUtils.VRMSchema.HumanoidBoneName.RightShoulder]: {
                rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.0, 0.0, -0.2)).toArray()
              },
              [VRMUtils.VRMSchema.HumanoidBoneName.LeftUpperArm]: {
                rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.0, 0.15, 1.1)).toArray()
              },
              [VRMUtils.VRMSchema.HumanoidBoneName.RightUpperArm]: {
                rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.0, -0.15, -1.1)).toArray()
              },
              [VRMUtils.VRMSchema.HumanoidBoneName.LeftLowerArm]: {
                rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.3, 0.3, 0.7)).toArray()
              },
              [VRMUtils.VRMSchema.HumanoidBoneName.RightLowerArm]: {
                rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.3, -0.3, -0.7)).toArray()
              },
            });

            scene.add(vrm.scene);
            currentVrm = vrm;
            currentVrm.scene.rotation.y = Math.PI; // Rotate model 180deg to face camera
            vrm.lookAt.target = orbitCamera; // look camera
            vrm.blendShapeProxy.setValue(VRMUtils.VRMSchema.BlendShapePresetName.Fun, 0.3);
            vrm.blendShapeProxy.setValue(VRMUtils.VRMSchema.BlendShapePresetName.A, 0.4);
          });
        },

        // for progress tag in HTML 

        //progress 값이 바뀔 때마다
        (progress) => {
          document.getElementById("progress").style.color = "#a056ff";

          this.avatarProgress = 100 * (progress.loaded / progress.total)
          if (this.avatarProgress == 100) {
            setTimeout(function () {
              document.getElementById("progress").style.display = "none";
            }, 1000);
          }
        },

        (error) => console.error(error)
      )

      setInterval(blink, 1000)

      function blink() {
        for (let i = 0; i < 4; i++) {
          if (currentVrm.scene) {
            var vrm = currentVrm;
            var blinkValue = vrm.blendShapeProxy.getValue(VRMUtils.VRMSchema.BlendShapePresetName.Blink)
            if (blinkValue === 0) {
              var rand = Math.random()
              if (rand > .9) {
                vrm.blendShapeProxy.setValue('blink', 1)
              }
            } else {
              vrm.blendShapeProxy.setValue(VRMUtils.VRMSchema.BlendShapePresetName.Blink, 0)
            }
            vrm.blendShapeProxy.update()
          }
        }
      }
    }
  },
})