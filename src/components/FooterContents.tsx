import qrCord from '@/assets/img/qr.png';
import Image from 'next/image';
import Link from 'next/link';
export default function FooterContents() {
  return (
    <>
      <main className="w-full bg-poten-black-2 pb-[100px]">
        <section
          className="px-6 py-6 text-poten-gray-1 lg:max-w-[1200px]
        lg:mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 grid-rows-5 md:grid-rows-3 gap-y-[32px]">
          <div className="lg:col-span-2">
            <h3 className="text-lg mb-4 font-bold">닌텐도 DS</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">중고 게임</Link>
              </li>
              <li>
                <Link href="/">중고 게임기</Link>
              </li>
              <li>
                <Link href="/">새제품 게임</Link>
              </li>
              <li>
                <Link href="/">새제품 게임기</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg mb-4 font-bold">닌텐도 스위치</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">중고 게임</Link>
              </li>
              <li>
                <Link href="/">중고 게임기</Link>
              </li>
              <li>
                <Link href="/">새제품 게임</Link>
              </li>
              <li>
                <Link href="/">새제품 게임기</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg mb-4 font-bold">닌텐도 스위치 2</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">중고 게임</Link>
              </li>
              <li>
                <Link href="/">중고 게임기</Link>
              </li>
              <li>
                <Link href="/">새제품 게임</Link>
              </li>
              <li>
                <Link href="/">새제품 게임기</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg mb-4 font-bold">플레이스테이션 4</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">중고 게임</Link>
              </li>
              <li>
                <Link href="/">중고 게임기</Link>
              </li>
              <li>
                <Link href="/">새제품 게임</Link>
              </li>
              <li>
                <Link href="/">새제품 게임기</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg mb-4 font-bold">플레이스테이션 5</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">중고 게임</Link>
              </li>
              <li>
                <Link href="/">중고 게임기</Link>
              </li>
              <li>
                <Link href="/">새제품 게임</Link>
              </li>
              <li>
                <Link href="/">새제품 게임기</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:row-start-2 hidden md:block">
            <h3 className="text-lg mb-4 font-bold">마이페이지</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">장바구니</Link>
              </li>
              <li>
                <Link href="/">찜목록</Link>
              </li>
              <li>
                <Link href="/">배송지등록</Link>
              </li>
              <li>
                <Link href="/">개인정보수정</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:row-start-2">
            <h3 className="text-lg mb-4 font-bold">포텐게임</h3>
            <ul className="text-poten-gray-2 flex gap-1 flex-col">
              <li>
                <Link href="/">회사소개</Link>
              </li>
              <li>
                <Link href="/">공지사항</Link>
              </li>
              <li>
                <Link href="/">자유게시판</Link>
              </li>
            </ul>
          </div>
          <div className="hidden  lg:flex lg:flex-col lg:items-center lg:ml-auto lg:col-start-12">
            <Image src={qrCord} width={300} height={300} alt="모바일 qr코드" />
            <p className="mt-2">카메라 스캔!</p>
          </div>
          <div className="col-span-2 row-span-2 md:col-span-4 lg:col-span-12">
            <hr className="border-poten-gray3 mb-4 md:mb-8" />
            <p className="md:hidden text-[14px]">
              포텐게임(주) | 대표 이도울 | 고객센터 02-134-5678
              <br />
              사업자등록번호 123-45-67890 <br />
              주소: 서울특별시 강남구 테헤란로 123
              <br />
              개인정보책임자 | 이도울(potengame@naver.com)
              <br />
              평일 10:00~18:00 | 점심 12:00~13:00 | 주말 휴무
            </p>
            <p className="hidden md:block leading-normal">
              포텐게임(주) | 대표 이도울 | 사업자등록번호 123-45-67890
              <br /> 주소: 서울특별시 강남구 테헤란로 123 | 고객센터 02-134-5678 |
              개인정보책임자 이도울(potengame@naver.com)
              <br /> 평일 10:00~18:00 | 점심 12:00~13:00 | 주말 휴무
            </p>
            <p className="text-poten-gray3 mt-[24px]">
              Copyright © 2024 PortenGame. All rights reserved.
              <br />
              Like Lion FrontEnd BootCamp 13
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
