"use client"
import React from 'react'
import Image from 'next/image'
import { BsFillTelephoneFill } from "react-icons/bs"
import { BiSolidStar, BiLike } from "react-icons/bi"
const Comments = () => {
        return (
                <div className="py-8 bg-gray-100">
                        <div className="px-2 border-b border-black pb-4">
                                <h3 className="uppercase text-2xl font-bold">Bình luận</h3>
                                <p className='font-bold'>200 bình luận</p>
                        </div>
                        <div className='flex flex-col gap-4 p-2 w-full mt-6'>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/images-20220304054029-20221225070211-etkfy.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">Trần Quốc Hưng</p>
                                                <p className="mt-4">Uống sữa này hết đc tê bì tay chân, đi lại dễ hơn. Quá vui luôn.</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 26
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/avatar2.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">Mai Lê</p>
                                                <p className="mt-4">Lúc đầu cũng không tin là dùng sữa này sẽ tốt lên đâu tại là sữa Việt, nhưng mà trời ban sao ý, tự dưng ông chồng đi mua thế là mình cũng dùng. Dùng được hết 1 lọ là thấy khác hẳn, đỡ hẳn tê bì tay chân, dạo này trời lạnh cũng không còn cảm giác tê buốt nữa. Rất tốt biết vậy đặt cả một thùng xong. Nói chung là nên thử nha, với cả chỗ này bán người dùng cũng vui cơ, mấy cháu bán hàng nhiệt tình lắm, hay hỏi thăm mình, xong điều chỉnh lượng uống để phù hợp với mình.</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 50
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/avatar3.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">Trần Quốc Hùng</p>
                                                <p className="mt-4">Mình mua cho bố dùng, dùng tốt lắm nhé, so với giá của mình lọ sữa nước ngoài thì loại này rẻ hơn. Bố mình cũng bảo dễ uống, không bị ngán như mấy sữa kia. Mà sữa này kiểu người già cũng uống được dù cho không bị tiểu đường. Mình mua một thùng giá rẻ lắm luôn ý, để ông bà dùng dần, date cũng cao nên chả lo gì. Mọi người nên mua dùng nhé!</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 26
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/avatar4.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">Giáp Nguyễn</p>
                                                <p className="mt-4">Rất hài lòng, dùng tốt mình mới bị tai nạn gãy xương, đang dùng thấy vết thương nhanh khỏi hơn hẳn. Sẽ mua lại.</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 26
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/avatar5.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">Phạm Quang Sáng</p>
                                                <p className="mt-4">Giá rẻ, dùng đỡ hẳn được đau mỏi xương khớp thật vị ngọt dịu dễ uống, tính ra một ngày bỏ ra chưa đến 20 nghìn sẽ mua tiếp khi hết.</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 26
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/avatar6.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">Mai Đông</p>
                                                <p className="mt-4">Để giúp cô một thùng đến địa chỉ số 33, ngách 217/19 trần phú nha.</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 26
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='flex gap-3 w-full'>
                                        <div className="bg-center bg-cover bg-no-repeat h-20 w-20 rounded-full" style={{ backgroundImage: 'url("/avatar-comment/avatar7.jpg")' }}></div>
                                        <div className="flex-1">
                                                <p className="font-bold text-xl text-blue-800">WISURE CANXI</p>
                                                <p className="mt-4">Dạ vâng cô để lại thêm số điện thoại để cháu gửi về luôn cho cô sử dụng ạ. Cảm ơn cô đã tin tưởng WISURE CANXI ạ</p>
                                                <div className="flex mt-3 items-center gap-16">
                                                        <div className="flex">
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                                <BiSolidStar color="#FDC222" />
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                                <BiLike /> 26
                                                        </div>
                                                </div>

                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Comments
