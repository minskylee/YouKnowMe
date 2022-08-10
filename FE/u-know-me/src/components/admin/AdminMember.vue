<template>
  <div class="admin-table">
    <div class="member">회원 관리</div>
    <table class="member-table">
      <thead class="memeber-table-title">
        <tr>
          <th class="num">번호</th>
          <th>유저 아이디</th>
          <th>가입일</th>
          <th>신고 누적 횟수</th>
          <th>계정 상태</th>
        </tr>
      </thead>
      <tbody class="member-table-content">
        <tr>
          <td class="num">번호</td>
          <td>아이디</td>
          <td>가입일</td>
          <td>신고 누적 횟수</td>
          <td>계정 상태</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.member {
  font-size: 30px;
  font-weight: 550;
}
.member-table{
  margin: 55px 0 0 0;
 }
.memeber-table-title {
  background-color: #f0f1ff;
 }
.member-table-content{
  height: 80%;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid #f0f1ff;
}
.member-table-content::-webkit-scrollbar {
  width: 10px;
}
.member-table-content::-webkit-scrollbar-thumb {
  background: #c1c3fc;
  border-radius: 10px;
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 550;
  font-size: 15px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 15px;
  color: rgb(0, 0, 0);
  border-bottom: solid 1px #f0f1ff;
}
</style>