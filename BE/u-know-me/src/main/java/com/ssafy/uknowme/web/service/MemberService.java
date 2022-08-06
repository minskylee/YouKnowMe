package com.ssafy.uknowme.web.service;

import com.ssafy.uknowme.model.dto.MemberDto.MemberJoinRequestDto;
import com.ssafy.uknowme.model.dto.MemberDto.MemberUpdateDto;

public interface MemberService {

    boolean join(MemberJoinRequestDto dto);

    boolean update(MemberUpdateDto memberUpdateDto);

    boolean existsById(String memberId);

    boolean existsByNickname(String memberNickname);

    boolean existsByTel(String memberTel);
}