import React from 'react'

const MenuItem = ({
  title,
  tags,
  price,
}: {
  title: any
  tags: any
  price: any
}) => (
  <div className="my-[1rem] mx-[0] flex w-[100%] flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="p__cormorant color-[] -text--color-golden">{title}</p>
      </div>
      <div className=" my-[0] mx-[1rem] h-[1px] w-[90px] -bg--color-grey" />
      <div className="flex justify-end items-end">
        <p className="p__cormorant color-[] ">{price}</p>
      </div>
    </div>
    <div className="mt-[0.2rem] w-[100%]">
      <p className="p__opensans -text--color-grey">{tags}</p>
    </div>
  </div>
)

export default MenuItem
