'use client'

import { Overlay } from '@/modules/3ds/components'
import { useSunStore } from '@/modules/3ds/models/Sun/store/SunStore'
import { ApresentationItem } from '@/modules/3ds/scenes'
import { Button } from '@/shared/pieces/Button'

export default function Sandbox() {
  const { setColor } = useSunStore()
  const changeColor = (color: string) => {
    // ramdom color primary colors

    setColor(color)
  }

  return (
    <main>
      <div className="flex h-screen flex-row items-center justify-center">
        <ApresentationItem />
        <Overlay>
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
                className="mr-2 h-10 w-10 rounded-full border-2 bg-[#F2F2F2] hover:bg-[#F2F2F2a6]"
                onClick={() => {
                  changeColor('#F2F2F2')
                }}
              />
            </>
          </div>
        </Overlay>
      </div>
    </main>
  )
}
