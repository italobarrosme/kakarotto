'use client'

import { Overlay } from '@/modules/3ds/components'
import { Iphone12 } from '@/modules/3ds/models'
import { useStoreIphone12 } from '@/modules/3ds/models/Iphone12/store'
import { ApresentationItem } from '@/modules/3ds/scenes'
import { Button } from '@/shared/pieces/Button'

type ProductParams = {
  params: {
    productId: string
  }
}

const Product = ({ params }: ProductParams) => {
  const { setColor } = useStoreIphone12()
  const changeColor = (color: string) => {
    setColor(color)
  }

  return (
    <section>
      <div className="h-screen w-screen items-center justify-center">
        <Overlay className="left-0 flex h-1/4 flex-col gap-2 p-8">
          <>
            <h1 className="break-words text-2xl font-bold">iPhone 12</h1>
            <small className="text-[10px]">{params.productId}</small>
            <div className="flex flex-col gap-4">
              <p className="text-xs sm:w-1/2 sm:text-base">
                Desenvolvido pela renomada Apple, o iPhone 12 é a combinação
                perfeita entre inovação e sofisticação. Com um design
                deslumbrante e recursos avançados, este smartphone redefine a
                experiência móvel. Permita-me apresentar a você as razões pelas
                quais o iPhone 12 é a escolha definitiva para quem busca o
                melhor em tecnologia:
              </p>
              <h2>
                <span className="text-2xl font-bold">R$ 4.999,00</span>
              </h2>
            </div>
            <div className="flex">
              <Button
                className="mr-2 h-10 w-10 rounded-full border-2 bg-[#030826] hover:bg-[#030826a6]"
                onClick={() => {
                  changeColor('#030826')
                }}
              />
              <Button
                className="mr-2 h-10 w-10 rounded-full border-2 bg-[#F27141] hover:bg-[#F27141A6]"
                onClick={() => {
                  changeColor('#F27141')
                }}
              />
              <Button
                className="mr-2 h-10 w-10 rounded-full border-2 bg-[#0CABA8] hover:bg-[#0CABA8]"
                onClick={() => {
                  changeColor('#0CABA8')
                }}
              />
            </div>
          </>
        </Overlay>
        <ApresentationItem model={<Iphone12 />}></ApresentationItem>
      </div>
    </section>
  )
}

export default Product
