const Dropdown = ({ items, title, onMouseEnter, onMouseLeave }) => {
    return (
      <div
        className="absolute left-0 right-0 w-1/2 rounded-br-full bg-salmon p-14 shadow-lg z-1 border-white border-b-2 transition-opacity duration-500 ease-in-out"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex flex-row justify-start space-x-20">
          {items.map((item, index) => (
            <div key={index}>
              <p className="text-lg">{title[index]}</p>
              <ul>
                {item.map((subItem, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Dropdown;