import React, { useEffect, useState } from 'react';
import Carousel from './component/Carousel';
import { Howl } from 'howler';
import music from './assets/music.mp3';
import emimg from './assets/em.jpg'
import khab from './assets/4281559853642995760.mp4'
const items = [
  {
    id: 1,
    img: 'path/to/image1.jpg',
    text: 'Tặng emm skin liên quânn',
  },
  {
    id: 2,
    img: 'path/to/image1.jpg',
    text: 'Tặng emm son mớiiii',
  },
  {
    id: 3,
    img: 'path/to/image1.jpg',
    text: 'Tặng emm bằng anh luôn :3',
  }, 
  {
    id: 4,
    img: 'path/to/image1.jpg',
    text: 'Tặng emm moneyyy',
  },
  {
    id: 5,
    img: 'path/to/image1.jpg',
    text: 'Em không thíc quà, chỉ thích tui',
  }
  // ...Thêm các item khác nếu cần
];

const picked = []

const App = () => {
  const [audioContextStarted, setAudioContextStarted] = useState(false);
  const [stage, setStage] = useState(1);
  const [datepicker, setDatePicker] = useState(new Date())
  const [showAlert, setShowAlert] = useState(false)
  console.log(datepicker) 
  const handleNextStage = () => {
    setStage(prev => prev + 1);
    setShowAlert(false)
  };

  const handleContinue = () => {
    if(stage == 1) {
      if(datepicker ,datepicker != '2004-11-10') {
        setShowAlert(true)
        return
      }
    }
    handleNextStage()
  }
  useEffect(() => {
    const startAudioContext = () => {
      const sound = new Howl({
        src: [music],
        autoplay: true,
        loop: true,
      });

      return () => {
        sound.stop();
      };
    };

    // Bắt đầu AudioContext chỉ khi có sự kiện tương tác của người dùng
    const handleUserInteraction = () => {
      if (!audioContextStarted) {
        startAudioContext();
        setAudioContextStarted(true);
      }
    };

    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [audioContextStarted]);

  return (
    <div className=" relative App flex flex-col items-center justify-center p-6 h-screen w-full max-w-7xl">
      {stage === 1 && (
        <div className="flex flex-col items-center justify-center gap-6">
          <p>Ai đấyyy, có phải người iu tôi không ạ, phải thì đọc pass ngày sinh của em ra đây mới được vào nha</p>
          <input value={datepicker} onChange={(e) => {
            setDatePicker(e.target.value)
          }} type="date" />
              
        </div>
      )}

      {stage == 2  && (
        <div className=' flex flex-col items-center justify-center'>
          <div>
          <div className=' flex'>
            <iframe onClick={e => {
              e.preventDefault()
            }} className=' m-6 h-72 object-cover object-center' src="https://giphy.com/embed/M90mJvfWfd5mbUuULX" class="giphy-embed"></iframe>
            </div>
          </div>
          <h1>Hôm nay là ngày của em 20/10, anh đôi khi hơi khô khan nhưng vẫn không để iem phải thiệt đâu ạ,
          anh chỉ muốn làm mọi thứ khác 1 chút để trở nên đặc biệt hơn trong mắt em thui!!! À mà con vô tri là do ở trước em anh anh bị bối rối đó chứ anh không có vô tri nha =))
          Hôm nay là ngày của em, người iuu em chúc em ngày càng xinh, yêu đời, ngày càng đáng iu nhưng mà vừa thôi không là chết tui =))
          Thế nhớ văn anh thi đh được có 7 điểm thôi =)) , yêu em nhiềuu, em đã hiểu chưa ạaaaa =))</h1>
        </div>
      )}
    {
      stage == 3 && (
        <div className=' flex w-full gap-10 flex-col'>
          <iframe onClick={e => {
              e.preventDefault()
            }} className=' m-6 h-72 object-cover object-center' src="https://giphy.com/embed/M90mJvfWfd5mbUuULX" class="giphy-embed"></iframe>
          <div>
            <h1 className=' text-xl font-semibold'>Ngày của em á, nên là em thíc gì cũng đượt nhaaa :3</h1>
          </div>
          <div className=' flex flex-col  justify-center w-full gap-4'>
            {
              items.map(item => {
                return (<Carousel items={item} list_item={picked} ></Carousel>)
              })
            }
          </div>
        </div>
        )
    } 
    {
      stage >=4 && (
        <div>
        <iframe onClick={e => {
              e.preventDefault()
            }} className=' m-6 h-72 object-cover object-center' src="https://giphy.com/embed/M90mJvfWfd5mbUuULX" class="giphy-embed"></iframe>
          <h1 className=' text-lg'> Hết dồi, anh đi học đâyy ạ, tối qua emmm</h1>
          <p>Em mà thích cái này bảo anh để anh lưu kỷ niệm của mình trên đây =))))</p>
        </div>
      )
    }
    <div className=' absolute bottom-14 mt-10 flex flex-col items-center justify-center gap-4'>
      <p className={` ${ showAlert ? ' opacity-100' : ' opacity-0'} text-red-600`}>Sai nha cấm vàoo</p>
      <button onClick={handleContinue} className=' rounded-3xl pt-2 pb-2 pr-4 pl-4 text-white bg-amber-600'>{stage < 4 ? "Tiếp tục thoai" : "Yêu emmm"}</button>
    </div>
    </div>
  );
};

export default App;
