function nextFrame(cb: () => any) {
    if (window.requestAnimationFrame) {
      // End of current frame
      window.requestAnimationFrame(() => {
        // Next frame
        window.requestAnimationFrame(cb)
      })
    } else {
      setTimeout(cb, 120)
    }
  }

  export default nextFrame