import React, {
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { forwardRef } from 'react'

const Intro = (props: any, ref: any) => {
  const vidRef = useRef<any>()
  useImperativeHandle(ref, () => ({
    playVideo: () => {
      handleVideo()
    },
  }))


  const [playVideo, setPlayVideo] = useState<boolean>(false)

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo: boolean) => !prevPlayVideo)
    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  return (
    <div className="relative h-[100vh]" id="intro">
      <video
        ref={vidRef}
        // type="video/mp4"
        muted
        // loop
        controls={false}
        onEnded={() => setPlayVideo(false)}
        src="./meal.mp4"
        className="h-[100%] w-[100%] object-cover"
      ></video>
      <div
        className="flex__center absolute
       inset-0 bg-[rgba(0,0,0,0.65)]"
      >
        <div
          className="flex__center h-[100px] w-[100px] 
        cursor-pointer
        rounded-full
        border-[1px]
        border-solid -border--color-golden"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className="text-[30px] -text--color-white" />
          ) : (
            <BsFillPlayFill className="text-[30px] -text--color-white" />
          )}
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Intro)
