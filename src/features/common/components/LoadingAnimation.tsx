import React, { useEffect, useState } from 'react'

/**
 * Props for the LoadingAnimation component.
 */
export interface AnimationProps {
  /**
   * An array of strings representing the data for the animation.
   */
  data: string[];
}

/**
 * A component displaying a loading animation with a sliding effect.
 * @category Components
 *
 * @param {AnimationProps} props - The props for the LoadingAnimation component.
 * @returns {JSX.Element} - Rendered LoadingAnimation component.
 */
const LoadingAnimation: React.FC<AnimationProps> = ({ data }: AnimationProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex === data.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, 800)

    return () => clearInterval(interval)
  }, [data.length])

  return (
    <div className="h-8 overflow-hidden">
      <div className="animate-slide">
        <p className="text-sm font-normal text-center text-blue-700 text-center">{data[index]}</p>
      </div>
    </div>
  )
}

export default LoadingAnimation
