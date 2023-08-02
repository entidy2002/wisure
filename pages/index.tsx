"use client"

import Action from "~/components/Action"
import Form from "~/components/Form"
import Header from "~/components/Header"
import Link from "next/link"
import { GoDotFill } from "react-icons/go"
import { BiLike, BiSolidGift, BiSolidCastle, BiSolidTruck } from "react-icons/bi"
import { BsShieldFillCheck } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import Comments from "~/components/Comments"
import Footer from "~/components/Footer"
import FormSale from "~/components/FormSale"
export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-white">
      <main className="md:max-w-[420px] w-full">
        <div className="w-full h-full">
          <Header />
          <img className="w-full" src="/banner-wisure.jpg" alt="" />
          <div className="uppercase text-center font-bold text-xl text-[#FF1616] p-2 "><p className="text">Wisure canxi - cát tường đã dùng</p> <p>Đảm bảo hiệu quả sau 10 ngày sử dụng</p></div>
          {/* <iframe width={420} height={236} src="https://www.youtube.com/embed/V8Igz30Sk0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> */}
          {/* Cát tường cam kết - Không hiệu quả cứ kiếm cát tường */}
          <div className="bg-[#042154] p-2">
            <div className="bg-[]">
              <p className="uppercase text-xl text-center text-white font-bold">Cát tường cam kết - Không hiệu quả cứ kiếm cát tường</p>
              <p className="text-white mt-3">
                - Wisure canxi - Hiệu quả từ 10 ngày sử dụng <br></br>- Dùng 10 ngày: Hết tê bì chân tay, tiểu nhiều tiểu đêm, mất ngủ<br></br>- Dùng 20 ngày: Sưng, đau nhức mỏi khớp<br></br>- Dùng 40 ngày: Vận động thoải mái như người bình thường<br></br>+ Không còn thoái hóa xương khớp, chống loãng xương<br></br>+ Tái tạo mô sụn, xương khớp dẻo dai<br></br>+ Tăng sức đề kháng, nâng cao hệ miễn dịch
              </p>
            </div>
          </div>
          {/* DÙNG SAU 10 NGÀY KHẲNG ĐỊNH CHẤM DỨT CÁC TRIỆU CHỨNG */}
          <div className="bg-white p-2">
            <div className="bg-[]">
              <p className="uppercase text-2xl text-center text-black font-bold">DÙNG SAU 10 NGÀY KHẲNG ĐỊNH CHẤM DỨT CÁC TRIỆU CHỨNG</p>
              <div className="flex flex-wrap w-full gap-4 justify-center">
                <div className="text-center uppercase font-bold flex flex-col gap-4">
                  <div className="w-[170px] h-[170px] bg-center bg-cover vg-no-repeat rounded-full" style={{ backgroundImage: 'url("/tê bì chân tay.jpg")' }}></div>
                  <p>tê bì chân tay</p>
                </div>
                <div className="text-center uppercase font-bold flex flex-col gap-4">
                  <div className="w-[170px] h-[170px] bg-center bg-cover vg-no-repeat rounded-full" style={{ backgroundImage: 'url("/mất ngủ tiểu đêm.jpg")' }}></div>
                  <p>mất ngủ tiểu đêm</p>
                </div>
                <div className="text-center uppercase font-bold flex flex-col gap-4">
                  <div className="w-[170px] h-[170px] bg-center bg-cover vg-no-repeat rounded-full" style={{ backgroundImage: 'url("/mệt mỏi đau nhức.jpg")' }}></div>
                  <p>mệt mỏi đau nhức</p>
                </div>
                <div className="text-center uppercase font-bold flex flex-col gap-4">
                  <div className="w-[170px] h-[170px] bg-center bg-cover vg-no-repeat rounded-full" style={{ backgroundImage: 'url("/cơ thể suy nhược.jpg")' }}></div>
                  <p>cơ thể suy nhược</p>
                </div>
              </div>
            </div>
          </div>
          {/* bà con còn do dự gì */}
          <div className="">
            <h5 className="uppercase font-bold text-lg text-[#2866BA] text-center">bà con <span className="text-red-600">còn do dự</span> gì mà không sử dụng <span className="text-yellow-300">wisrure canxi</span></h5>
            <h5 className="uppercase font-bold text-xl text-red-500 text-center mt-12">phòng bệnh vẫn hơn chữa bệnh</h5>
            <div className="flex gap-6 items-center justify-center mt-4 mb-3">
              <span className="font-bold uppercase">Việt Nam</span>
              <img className="w-24" src="/Flag_of_Vietnam.svg.png" alt="" />
              <img className="w-24" src="/Flag-France.webp" alt="" />
              <span className="font-bold uppercase">Pháp</span>

            </div>
            <h5 className="uppercase font-bold text-xl text-[#011598] text-center">Sữa non xương khớp wisure canxi từ pháp</h5>

            <img className="w-full" src="/viện hàn lâm.png" alt="" />
            <p className="text-center text-blue-800 font-bold text-lg">Wisure Canxi hợp tác cùng Viện Hàn Lâm Khoa Học và Công Nghệ Việt Nam ứng dụng công nghệ NANO CANXI</p>
            <p className="text-lg p-2">Khoa học hiện đại chỉ ra, nguyên nhân sâu xa và quan trọng hàng đầu của các bệnh xương khớp <span className="font-bold">là do hệ miễn dịch của cơ thể bị rối loạn</span>, làm sản sinh ra các chất gây viêm tấn công xương khớp của chính mình.<br></br><br></br><span className="font-bold text-red-700">WISURE CANXI </span>với bộ dưỡng chắt đặc hiệu, giúp hỗ trợ ngăn ngừa các yếu tố gây viêm - nguyên nhân hàng đầu làm phá hủy xương khớp. Nhờ đó <span className="font-bold">giúp hỗ trợ giảm đau hiệu quả, bảo vệ xương khớp chắc khỏe, toàn diện, giảm khả năng tái phát bệnh</span>.Khi sức khỏe xương khớp được cải thiện, người bệnh sẽ vận đông linh hoạt, tự chủ cuộc sống.</p>
          </div>

          {/* Chỉ định */}
          <div className="mt-4">
            <h1 className="text-center uppercase font-bold p-2 bg-[#120B5C] text-white">Chỉ định</h1>
            <p className="text-lg bg-gray-100 px-1 p-4">- Ngoài việc thay đổi thói quen hoạt động, vận động, bạn cần tìm đến những sản phẩm hỗ trợ từ bên trong cho cơ thể. Được các chuyên gia dinh dưỡng hàng đầu đánh giá rất tốt, dòng sữa WISURE CANXI là lựa chọn hoàn hảo cho những ai có nguy cơ cao, đang bị các bệnh lý xương khớp sử dụng.
              <img className="w-full" src="/banner4.jpg" alt="" />
              Thực phẩm này có chứa nhiều dưỡng chất cần thiết cho quá trình tái tạo hệ thống xương khớp, hỗ trợ điều trị bệnh lý được chiết xuất từ thiên nhiên phù hợp dùng cho những đối tượng sau:
              <br></br>
              <br></br>
              + Dùng cho những ai đang bị mắc các bệnh lý xương khớp, bị thoái hóa, loãng xương<br></br>
              + Dùng cho người cao tuổi, người đang có nguy cơ loãng xương<br></br>
              + Những ai thường xuyên phải làm việc nặng<br></br>
              + Những ai muốn phòng ngừa các bệnh lý xương khớp</p>

          </div>

          {/* Chống chỉ định */}
          <div className="mt-4">
            <h1 className="text-center uppercase font-bold p-2 bg-[#120B5C] text-white">Chống chỉ định</h1>
            <p className="flex gap-2 items-center font-bold">
              <GoDotFill />
              Không dùng cho những ai bị mẫn cảm với bất kỳ thành phần nào có trong sản phẩm
            </p>

            <span className="font-bold mr-2">Lưu ý:</span><i>Hiệu quả sử dụng sản phẩm tùy thuộc vào cơ địa từng người</i>
          </div>
          {/* Cơ chế tác động */}
          <div className="mt-4">
            <h1 className="text-center uppercase font-bold p-2 bg-[#120B5C] text-white">Cơ chế tác động</h1>
            <div className="p-4 text-lg">
              Sữa WISURE CANXI áp dụng theo công thức siêu vi để cho ra các hạt canxi kích thước cực nhỏ. Sản phẩm này sử dụng những thành phần có chiết xuất từ sữa bò, các hoạt chất có trong tự nhiên để kết hợp lại với nhau.
              <br></br>
              Sữa hỗ trợ bệnh xương khớp WISURE CANXI lựa chọn giải pháp bổ sung canxi cho cơ thể theo cơ chế 3 tác động: Bổ sung – Làm lành tổn thương – Phòng ngừa.
              <br></br>
              <br></br>
              <div className="flex gap-1 mb-2"><BiLike size="40" /><span className="flex-1 text-blue-600">Bổ sung: CANXI NANO chứa các hoạt chất quan trọng, giúp bổ sung vào những phần còn thiếu trong cấu trúc xương khớp.</span></div>
              <div className="flex gap-1 mb-2"><BiLike size="40" /><span className="flex-1 text-blue-600">Làm lành tổn thương: Bệnh lý xương khớp thường để lại những tổn thương nhất định tại khu vực xung quanh khớp thoái hóa, khiến nó bị sưng, viêm. CANXI NANO sẽ đưa các dưỡng chất đến để làm tiêu viêm, giảm sưng, hỗ trợ giảm các cơn đau nhức.</span></div>
              <div className="flex gap-1 mb-2"><BiLike size="40" /><span className="flex-1 text-blue-600">Phòng ngừa: Không chỉ phòng ngừa nguy cơ mắc các bệnh lý xương khớp cho người trẻ, CANXI NANO còn hỗ trợ ngăn tình trạng tái phát, quay trở lại của bệnh.</span></div>
            </div>
            <img className="w-full" src="/banner5.jpg" alt="" />
          </div>

          {/* khuyến mại 40% */}

          <div className="mt-4">
            <div className="w-4/5 border-4 mx-auto text-center p-2 border border-red-500 rounded-xl">
              <Link href="#gift" className="w-full">
                <span className="uppercase font-bold text-red-600 text-2xl underline">Khuyến mại 40% cực sốc</span>
              </Link>
            </div>
            <p className="text-2xl font-bold mt-3">CÓ SỨC KHỎE, BẠN SẼ KIẾM ĐƯỢC NHIỀU TIỀN HƠN, ĐỪNG ĐẮN ĐO VỀ KHOẢN TIỀN MUA SỨC KHỎE !</p>
            <div className="w-full mt-4 mx-auto text-center p-2 bg-[#0220E6] rounded-full">
              <Link href="#formsale" className="w-full">
                <span className="uppercase font-bold text-white text-2xl p-6">Đặt hàng ngay nhận ngay ưu đãi</span>
              </Link>
            </div>
          </div>

          {/* ưu điểm */}
          <div>
            <img className="w-full" src="/banner6.png" alt="" />
            <div className="p-2 text-lg">
              Có thể bạn không ngờ rằng, từ những thói quen nhỏ như ngồi xổm, bẻ tay, vặn lưng quá mức hay đi giày cao gót liên tục trong thời gian dài lại là nguyên nhân gây ra bệnh lý xương khớp. Và nhiều thói quen xấu khác sẽ làm tăng nguy cơ phát bệnh, tái phát quay trở lại.
              <img className="w-full" src="/banner3.jpg" alt="" />
              <div className="bg-blue-800 px-4 py-8 flex flex-col gap-8">
                <div className="bg-white rounded-lg p-4 flex flex-col items-center text-xl">
                  <BiLike size="48" color="blue" />
                  <p className="text-blue-800 font-bold mb-2">Hiệu quả vượt trội</p>
                  <p>Các thành phần có trong Wisure Canxi tác động vào cơ chế bệnh sinh, hỗ trợ giảm đau trong thoái hóa khớp, viêm khớp, viêm khớp dạng thấp, làm chậm thoái hóa. Từ đó giảm nguy cơ viêm khớp, thoái hóa khớp.</p>
                </div>
                <div className="bg-white rounded-lg p-4 flex flex-col items-center text-xl">
                  <BsShieldFillCheck size="48" color="blue" />
                  <p className="text-blue-800 font-bold mb-2">Thành phần tự nhiên</p>
                  <p>Không ảnh hưởng đến dạ dày, tim mạch, thành phần sữa non siêu hiếm từ bò mẹ sau sinh 48h.</p>
                </div>
                <div className="bg-white rounded-lg p-4 flex flex-col items-center text-xl">
                  <BiSolidCastle size="48" color="blue" />
                  <p className="text-blue-800 font-bold mb-2">Hiệu quả vượt trội</p>
                  <p>Công nghệ tinh chế sữa non khép kinh siêu sạch, đảm bảo an toàn thực phẩm. Nhập khẩu 100% từ Pháp</p>
                </div>
                <div className="bg-white rounded-lg p-4 flex flex-col items-center text-xl">
                  <FaUser size="48" color="blue" />
                  <p className="text-blue-800 font-bold mb-2">Hợp tác độc quyền Viện Hàn Lâm Quốc Gia</p>
                  <p>Wisure Canxi được cứng dụng độc quyền công nghệ NANO CANXI từ Viện Hàn Lâm Quốc Gia Việt Nam. Đảm bảo uy tín!</p>
                </div>
                <div className="bg-white rounded-lg p-4 flex flex-col items-center text-xl">
                  <BiSolidTruck size="48" color="blue" />
                  <p className="text-blue-800 font-bold mb-2">Vận chuyển đến tận nhà</p>
                  <p>Đặt mua Wisure khách hàng sẽ được gửi hàng đến tận nhà, kiểm tra đầy đủ tem mác, tem chống giả mới phải thanh toán.</p>
                </div>
              </div>

            </div>
          </div>
          {/* Công dụng */}
          <div className="mt-4">
            <h1 className="text-center uppercase font-bold p-2 bg-[#120B5C] text-white">Công dụng của sữa WISURE CANXI</h1>
            <div className="p-2 text-lg">
              Có thể bạn không ngờ rằng, từ những thói quen nhỏ như ngồi xổm, bẻ tay, vặn lưng quá mức hay đi giày cao gót liên tục trong thời gian dài lại là nguyên nhân gây ra bệnh lý xương khớp. Và nhiều thói quen xấu khác sẽ làm tăng nguy cơ phát bệnh, tái phát quay trở lại.
              <img className="w-full" src="/banner3.jpg" alt="" />

              <div className="flex flex-col gap-4 p-2">
                <div className="flex gap-2 items-center">
                  <img className="w-24" src="/công dụng/lam-cham-qua-trinh-lao-hoa-khop-20221006040934-zpfns-20221225033122-2qw2x.png" alt="" />
                  <span className="font-bold text-lg">Làm chậm quá trình thoái hóa khớp.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-24" src="/công dụng/tang-do-ben-va-deo-dai-cho-khop-20221006040935-e0s3e-20221225033646-jfrju.png" alt="" />
                  <span className="font-bold text-lg">Tăng độ bền và dẻo dai cho khớp.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-24" src="/công dụng/bao-ve-va-tai-tao-sum-khop-20221006040935-_vjyh-20221225034012-kqo2w (2).png" alt="" />
                  <span className="font-bold text-lg">Bảo vệ mạng hoạt dịch.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-24" src="/công dụng/bao-ve-mang-hoat-dich-20221006040935-shxja-20221225034104-jwtmf.png" alt="" />
                  <span className="font-bold text-lg">Bảo vệ và tái tạo sụn khớp.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-24" src="/công dụng/thoai-hoa-khop-20221006040935-kgcoc-20221225034156-pfjfs.png" alt="" />
                  <span className="font-bold text-lg">Giảm đau trong thoái hóa khớp và viêm khớp, viêm khớp dạng thấp.</span>
                </div>
              </div>
            </div>
            <span className="font-bold mr-2">Lưu ý:</span><i>Hiệu quả sử dụng sản phẩm tùy thuộc vào cơ địa từng người</i>
          </div>
          {/* Cách sử dụng */}
          <div className="mt-4">
            <h1 className="text-center uppercase font-bold p-2 bg-[#120B5C] text-white">Cách sử dụng</h1>
            <img className="w-full" src="/using.png" alt="" />
            <p className="p-2"><span className="text-blue-500 font-bold">HƯỚNG DẪN SỬ DỤNG</span>: Để pha 1 ly 220 ml, cho 200 ml nước nóng (45-60 độ C) vào ly. Cho 2 muỗng gạt ngang WISURE (khoảng 50g bột) hoặc 2 gói bột ~ 50g, khuấy đều cho đến khi bột tan hết.</p>
            <img className="w-full" src="/using2.png" alt="" />

          </div>
          {/* quà tặng đặc biệt */}
          <div id="gift" className="mt-4">
            <div className="flex justify-center items-center text-2xl uppercase font-bold text-red-500 gap-2"><BiSolidGift color="#FFDE59" />quà tặng đặc biệt<BiSolidGift color="#FFDE59" /></div>
            <div className="mx-1 flex flex-col gap-2">
              <img className="w-full" src="/mua3tang1.jpg" alt="" />
              <img className="w-full" src="/mua5tang3.jpg" alt="" />
              <FormSale />
            </div>
          </div>
          {/* chứng chỉ kiểm định */}
          <div className="mt-4 bg-gray-100">
            <h1 className="text-center uppercase font-bold p-2 text-red-600 text-2xl">Chứng chỉ kiểm định</h1>
            <div className="mx-6 flex flex-col gap-2">
              <img className="w-full" src="/certificate.png" alt="" />
              <img className="w-full" src="/certificate2.png" alt="" />
            </div>
          </div>
          {/* feedback */}
          <div className="mt-4 bg-gray-100">
            <h1 className="text-center uppercase font-bold p-2 text-black-800 text-xl">feedback của khách hàng sau khi sử dụng wisure canxi</h1>
            <div className="flex flex-col gap-2 overflow-hidden">
              <iframe className="w-full" style={{ height: 'calc(420px/1.77)' }} src="https://www.youtube.com/embed/VuLKGoS07CE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              <iframe className="w-full" style={{ height: 'calc(420px/1.77)' }} src="https://www.youtube.com/embed/3kU9dLxY9eo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              <iframe className="w-full" style={{ height: 'calc(420px/1.77)' }} src="https://www.youtube.com/embed/5uFQBO7uQCY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>

          <Comments />
          <Footer />
          <Action />
          {/* Phone */}
          <Link href="tel:0367023785">
            <div className="fixed block  bottom-[400px] right-0  h-20 w-20 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: 'url("phone-icon-20230603032240-0outw.gif")' }}>

            </div>
          </Link>

        </div>
      </main >
    </div >

  )
}
