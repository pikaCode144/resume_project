import { memo } from "react";

const Card = memo(({ title, children, className, ...otherProps }) => {
  return (
    <div className={`p-[10px] bg-white rounded-[10px] ${className ? `${className}` :''}`} {...otherProps}>
      {title && <div className='h-8 ml-4 text-sm/8 font-semibold'>{title}</div>}
      {children}
    </div>
  )
});

export default Card;
