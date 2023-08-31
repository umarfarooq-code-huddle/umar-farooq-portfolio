import { useState, useEffect ,useRef} from "react";
export default function Card(props) {

  const [text, setText] = useState('');
  const typingRef = useRef(null);


  useEffect(() => {

    const fullText = props.desc;
    const huddle = 'Huddle';
    let currentIndex = 0;

    
    typingRef.current = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex)+'!');

        currentIndex++;
      } else {
        currentIndex = 0;

      

      }
    }, 50);




   return () => clearInterval(typingRef.current);
  }, []);

  return (
    <div className="myCard ml-10 mr-12 bg-white mb-20 -mt-10  h-auto pb-24 block  text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">


      <div className="p-6 pt-10">
        <img src={props.imgSrc} className="w-24"></img>
        <h5 className="ml-3 mt-20 mb-2 text-3xl text-left font-bold leading-tight text-neutral-800 dark:text-neutral-50">
          {props.title}
        </h5>
        <p className="ml-3 mb-4 pt-10 text-2xl text-left text-neutral-600 dark:text-neutral-200">
          {text}
        </p>

      </div>

    </div>
  );
}
