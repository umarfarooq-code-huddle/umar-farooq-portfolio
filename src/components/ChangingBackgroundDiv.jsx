import { useState, useEffect, useRef } from 'react';

const ChangingBackgroundDiv = () => {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [isBackground,setBackground] = useState(true);
  const [wordIndex,setWord] = useState(0);
  const typingRef = useRef(null);
  
  const huddle = 'Huddle '
  useEffect(() => {

    const fullText = ['Code','Ideate','Solve'];
    const huddle = 'Huddle';
    let currentIndex = 0;

    
    typingRef.current = setInterval(() => {
      if (currentIndex <= fullText[wordIndex].length) {
        setText(fullText[wordIndex].slice(0, currentIndex)+'!');
        setText2(huddle.slice(0, currentIndex));
        currentIndex++;
      } else {
        setWord(wordIndex<2?wordIndex+1:0);
        currentIndex = 0;

        setBackground(isBackground == true ? false : true);

      

      }
    }, 200);




   return () => clearInterval(typingRef.current);
  }, [isBackground]);


  return (
    <div className="inline-block w-100 items-center justify-center">
      <div className="flex flex-row">
      <div className={`text-8xl font-mono ${isBackground?'text-white bg-black dark:text-black dark:bg-white':'text-black bg-white dark:text-white dark:bg-black'}`}>{text} </div>
      <div className={`text-8xl font-mono ${/*!isBackground?'text-white bg-black':'text-black bg-white'*/1} bg-black text-white dark:text-black dark:bg-white`}>Your</div>
      </div>
      <div className={`text-8xl font-bold ${/*!isBackground?'text-white bg-black':'text-black bg-white'*/1} bg-black text-white dark:text-black dark:bg-white`}>Business <br/> Problems </div>

    </div>
  );
};

export default ChangingBackgroundDiv;
