import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useGet } from '@/services/http'

type Props = {}

const SectionsFirst = (props: Props) => {
  const { data, isError, isSuccess, isPending } = useGet("");
  const bannerData = [
    {
      title: "Sample Title1",
      image: "/banner/banner-1.png"
    },
    {
      title: "Sample Title2",
      image: "/banner/banner-2.png"
    },
    {
      title: "Sample Title3",
      image: "/banner/slider-1.png"
    },
    {
      title: "Sample Title4",
      image: "/banner/slider-1.png"
    },
  ]

  return (
    <div className='container '>
      <Carousel className="w-full ">
        <CarouselContent >
          {bannerData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card style={{ backgroundImage: `url(${item?.image})` }} className='bg-cover'>
                  <CardContent className="flex aspect-square h-[430px] w-full items-center justify-center p-6">
                    {/* <span className="text-2xl font-semibold">{item?.title}</span> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}


export default SectionsFirst