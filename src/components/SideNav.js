import React,{useState} from 'react';

const SideNav = ({headings}) => {
    const [active, setActive] = useState("");

    return (
      <nav className="sticky top-32 overflow-auto toc-inner">
        <ul>
          {/* {headings.map((heading, index) => ( */}
            <li
            //   key={heading.uid}
              className="mt-4 text-lg text-gray-700 dark:text-gray-400"
              style={{
                paddingLeft: "1rem" ,
                color: "#6366f1",
              }}
              onClick={(e) => {
                setActive("hello");
              }}
            >
              <a href="#">Link</a>
            </li>
          {/* ))} */}
        </ul>
      </nav>
    );
}

export default SideNav