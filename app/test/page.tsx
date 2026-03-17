import React from 'react'

const page = () => {
  return (
    // p-12 = padding on all sides (equivalent to ~48px)
    // min-h-screen = makes the div at least as tall as the full screen
    <div className="pt-20 min-h-screen">

      {/* text-white = white text color */}
      {/* text-5xl = large font size (roughly 48px) */}
      {/* font-bold = makes the text bold */}
      <p className="text-white text-5xl font-bold">HELLO</p>

    </div>
  )
}

export default page

