'use client'

import { Overlay } from '@/modules/3ds/components'
import { Iphone12 } from '@/modules/3ds/models'
import { useStoreIphone12 } from '@/modules/3ds/models/Iphone12/store'
import { ApresentationItem } from '@/modules/3ds/scenes'
import { Button } from '@/shared/pieces/Button'

export default function Sandbox() {
  const { setColor } = useStoreIphone12()
  const changeColor = (color: string) => {
    setColor(color)
  }

  return (
    <main>
      <div className="flex h-screen w-screen flex-row items-center justify-center">
        <ApresentationItem model={<Iphone12 />}></ApresentationItem>
        <Overlay className="left-0 w-1/6">
          <div className="absolute left-6 top-5 flex">
            <>
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
            </>
          </div>
        </Overlay>
      </div>
    </main>
  )
}
