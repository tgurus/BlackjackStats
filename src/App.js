import React, {useState, useEffect} from 'react';
//import { AdmobAds, BannerPosition, BannerSize } from "capacitor-admob-ads";
import './App.css';
import resetRed from './data/img/reset1.png';
import resetBlack from './data/img/reset-black.png';
import { dealerData, hardData, softData, pairData, playData } from './data/data';
import backgroundImg from './data/img/bg.png';
import {wait} from "@testing-library/user-event/dist/utils";
/*import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins; */


const App = () => {
  const [blackInitial, setBlackInitial] = useState(false);
  const [dealerCard, setdealerCard] = useState(false);
  const [playerCards, setplayerCards] = useState([]);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  
  const generateClass = (content, index1, index2) => {
    if(blackInitial){
      return "tableTd blackColor blackBack";
    }
    if(content === 'HIT'){
      if(playerCards.length === 0){
        if( dealerCard === index2){
          return "tableTd whiteColor greenBack";
        }
        else if(dealerCard === false){
          return "tableTd greyColor greenBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCards.includes(index1)){
        if( dealerCard === index2){  
          return "tableTd whiteColor greenBack";
        }
        else if(dealerCard === false){
          return "tableTd whiteColor greenBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerCard === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerCard === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'STAND'){
      if(playerCards.length === 0){
        if( dealerCard === index2){
          return "tableTd whiteColor redBack";
        }
        else if(dealerCard === false){
          return "tableTd greyColor redBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCards.includes(index1)){
        if( dealerCard === index2){  
          return "tableTd whiteColor redBack";
        }
        else if(dealerCard === false){
          return "tableTd whiteColor redBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerCard === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerCard === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'Double or Hit'){
      if(playerCards.length === 0){
        if( dealerCard === index2){
          return "tableTd whiteColor blueBack";
        }
        else if(dealerCard === false){
          return "tableTd greyColor blueBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCards.includes(index1)){
        if( dealerCard === index2){  
          return "tableTd whiteColor blueBack";
        }
        else if(dealerCard === false){
          return "tableTd whiteColor blueBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerCard === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerCard === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'Double or Stand'){
      if(playerCards.length === 0){
        if( dealerCard === index2){
          return "tableTd whiteColor pinkBack";
        }
        else if(dealerCard === false){
          return "tableTd greyColor pinkBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCards.includes(index1)){
        if( dealerCard === index2){  
          return "tableTd whiteColor pinkBack";
        }
        else if(dealerCard === false){
          return "tableTd whiteColor pinkBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerCard === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerCard === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'SPLIT'){
      if(playerCards.length === 0){
        if( dealerCard === index2){
          return "tableTd whiteColor dodgerBack";
        }
        else if(dealerCard === false){
          return "tableTd greyColor dodgerBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCards.includes(index1)){
        if( dealerCard === index2){  
          return "tableTd whiteColor dodgerBack";
        }
        else if(dealerCard === false){
          return "tableTd whiteColor dodgerBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerCard === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerCard === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
  }

  const blackInitialize = () => {
    setBlackInitial(true);
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function resetCards() {

    await delay(200); // Wait
    //playerCards.length = 0;
    setplayerCards([]);
    setdealerCard(false);
  }

  /*
    useEffect(() => {
      const initializeAdMob = async () => {
          try {
              await AdMob.initialize("us.technogurus.blackjackstats");

              // Show a banner ad
              // ca-app-pub-1554812834222157~3680825405
              await AdMob.showBanner({
                adId: "ca-app-pub-1554812834222157/5434832145",
                position: "bottom", // "top" or "bottom"
                size: "BANNER", // Common sizes: "BANNER", "LARGE_BANNER", etc.
            });
          } catch (error) {
              console.error('Error initializing AdMob', error);
          }
      };

      initializeAdMob();

      return () => {
          // Optional: Cleanup when the component unmounts
          // AdMob.hideBanner();
      };
  }, []);
  */
  return (
    <div className="App">
      <div className='tableHead dealerHead1'>
        <div className='flex-row'>
          {
            dealerData.map((item, index) => {
              return (
                <div className='dealerIcon tableTh' onClick={() => {
                  setBlackInitial(false);
                  setdealerCard(index);
                }} key={index}><img src={item.content} /></div>
              );
            })
          }
        </div>
      </div>
      <div className='tableHead dealerHead2'>
        <div className='flex-row'>
          {
            dealerData.map((item, index) => {
              return (
                <div className='dealerIcon tableTh' onClick={() => {
                  
                  setBlackInitial(false);
                  setdealerCard(index);
                }} key={index}><img src={item.content} /></div>
              );
            })
          }
        </div>
      </div>
      <div className='tableBody dealerBody1'>
        {
          hardData.map((row, index1) => {
            return (
              <div key={index1} className='flex-side tableRow'>
                <div className='tableHardFirst' onClick={() => {
                  setBlackInitial(false);
                  if (!playerCards.includes(index1)) {
                  if (!checkbox1) playerCards.length = 0;
                  if(playerCards.length === 0){
                    setplayerCards((prevItems) => [...prevItems, index1]);
                  }
                  else if(playerCards.length === 1){
                    if(!checkbox1) playerCards.length = 0;
                    setplayerCards((prevItems) => [...prevItems, index1]);
                    }
                  else if(playerCards.length > 1){
                   if(!checkbox2) playerCards.length = 1;
                   else if(!checkbox1) playerCards.length = 0;
                   else playerCards.length = 2;
                   setplayerCards((prevItems) => [...prevItems, index1]);
                  }
                  //if(!checkbox1) playerCards.length = 0; else if(checkbox1 && !checkbox2) playerCards.length = 1; else if(checkbox1 && checkbox2) playerCards.length = 2;
                  // setplayerCards((prevItems) => [...prevItems, index1]);
                }}}><img src={row.name} alt='hard' /></div>
                {
                  row.rowdata.map((item, index2) => {
                    return (
                      <div className={generateClass(item, index1, index2)} key={index2}>{item}</div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <div className='tableBody dealerBody2'>
        {
          pairData.map((row, index1) => {
            return (
              <div key={index1} className='flex-side tableRow'>
                <div className='tablePairFirst' onClick={() => {
                  setBlackInitial(false);
                  if (!playerCards.includes(19 + index1)) {
                    if (!checkbox1) playerCards.length = 0;
                    if (playerCards.length === 0) {
                      setplayerCards((prevItems) => [...prevItems, 19 + index1]);
                    } else if (playerCards.length === 1) {
                      if (!checkbox1) playerCards.length = 0;
                      setplayerCards((prevItems) => [...prevItems, 19 + index1]);
                    } else if (playerCards.length > 1) {
                      if (!checkbox2) playerCards.length = 1;
                      else if (!checkbox1) playerCards.length = 0;
                      else playerCards.length = 2;
                      setplayerCards((prevItems) => [...prevItems, 19 + index1]);
                    }
                  }}}><img src={row.name} alt='pair' /></div>
                {
                  row.rowData.map((item, index2) => {
                    return (
                      <div className={generateClass(item, 19 + index1, index2)} key={index2}>{item}</div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <div className='tableBody softBody1'>
        {
          softData.map((row, index1) => {
            return (
              <div key={index1} className='flex-side tableRow'>
                <div className='tableSoftFirst' onClick={() => {
                  setBlackInitial(false);
                  if (!playerCards.includes(11+index1)) {
                    if (!checkbox1) playerCards.length = 0;
                    if (playerCards.length === 0) {
                      setplayerCards((prevItems) => [...prevItems, 11 + index1]);
                    } else if (playerCards.length === 1) {
                      if (!checkbox1) playerCards.length = 0;
                      setplayerCards((prevItems) => [...prevItems, 11 + index1]);
                    } else if (playerCards.length > 1) {
                      if (!checkbox2) playerCards.length = 1;
                      else if (!checkbox1) playerCards.length = 0;
                      else playerCards.length = 2;
                      setplayerCards((prevItems) => [...prevItems, 11 + index1]);
                    }
                  }}}><img src={row.name} alt='soft' /></div>
                {
                  row.rowdata.map((item, index2) => {
                    return (
                      <div className={generateClass(item, 11 + index1, index2)} key={index2}>{item}</div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>

      <div className='btnGroup'>
        <div className='reset' onClick={() => {

          setBlackInitial(false);
          //setplayerCards([]);  // this creates a NEW array and leaves the old one in memory i.e. MEMORY LEAK!!!!
          // ALSO-- the above, by itself, does not clear the values from the dropdowns onscreen
          setplayerCards(["","",""]); //instead we set values to empty FIRST (which clears dropdowns)
          resetCards();               //and then create new array after delay
          console.log(playerCards);
        }}>
          <img src={resetRed} alt='reset'/>
        </div>
        <div className='resetBlack' onClick={() => {
          //setplayerCards([]);  // this creates a NEW array and leaves the old one in memory i.e. MEMORY LEAK!!!!
          // ALSO-- the above, by itself, does not clear the values from the dropdowns onscreen
          setplayerCards(["","",""]); //instead we set values to empty FIRST (which clears dropdowns)
          resetCards();               //and then create new array after delay
          blackInitialize();
        }}>
          <img src={resetBlack} alt='reset'/>
        </div>
      </div>
      <div className='result'>
        <div className='flex-side dealerResult'>
          <div className='col-md-6'>
            <select value={dealerCard} onChange={(e) => {
              setdealerCard(parseInt(e.target.value));
            }}>
              <option value={false} hidden></option>
              {dealerData.map((item, index) => {
                return (
                  <option key={index} value={index}>{item.name}</option>
                );
              })}
            </select>
          </div>
          <div className='col-md-6 blackBack yellowColor'>
            <span>{dealerCard !== false && dealerData[dealerCard].busting} %</span>
          </div>
        </div>
        <div className='playerResult'>
            <div className='title'>
                <br/><br/>
            </div>
            <div className='col-md-12'>
              <div className='flex-side'>
                <div className='col-md-2'></div>
                <div className='col-md-4'>
                  <select value={playerCards[0]} onChange={(e) => {
                        setplayerCards((prevItems) => {
                          const newItems = [...prevItems];
                          newItems[0] = parseInt(e.target.value);
                          return newItems;
                        });
                      }}>
                          <option value={false} hidden></option>

                    {
                          hardData.map((item, index) => {
                            return (
                              <option key={index} value={index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          softData.map((item, index) => {
                            return (
                              <option key={11 + index} value={11 + index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          pairData.map((item, index) => {
                            return (
                              <option key={19 + index} value={19 + index}>{item.content}</option>
                            );
                          })
                        }
                  </select>
                </div>
                <div className='col-md-6 blackBack yellowColor'>
                  {playerCards.length > 0 && playData[playerCards[0]]}%
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='flex-side'>
                <div className='col-md-2'>
                  <input type='checkbox' checked={checkbox1} onChange={() => {
                    setCheckbox1(!checkbox1);
                  }} />
                </div>
                <div className='col-md-4'>
                  {
                    checkbox1 && 
                      <select value={playerCards[1]} onChange={(e) => {
                        setplayerCards((prevItems) => {
                          const newItems = [...prevItems];
                          newItems[1] = parseInt(e.target.value);
                          return newItems;
                        });
                      }}>
                          <option value={false} hidden></option>

                        {
                          hardData.map((item, index) => {
                            return (
                              <option key={index} value={index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          softData.map((item, index) => {
                            return (
                              <option key={11 + index} value={11 + index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          pairData.map((item, index) => {
                            return (
                              <option key={19 + index} value={19 + index}>{item.content}</option>
                            );
                          })
                        }
                      </select>
                  }
                </div>
                
                  {
                    checkbox1 && 
                    <div className='col-md-6 blackBack yellowColor'>{playerCards.length > 1 && playData[playerCards[1]]}%</div>
                  }
                
              </div>
            </div>
            {checkbox1 && 
              <div className='col-md-12'>
                <div className='flex-side'>
                  <div className='col-md-2'>
                    <input type='checkbox' checked={checkbox2} onChange={() => {
                      setCheckbox2(!checkbox2);
                    }} />
                  </div>
                  <div className='col-md-4'>
                    {
                      checkbox2 && 
                        <select value={playerCards[2]} onChange={(e) => {
                          setplayerCards((prevItems) => {
                            const newItems = [...prevItems];
                            newItems[2] = parseInt(e.target.value);
                            return newItems;
                          });
                        }}>
                          <option value={false} hidden></option>
                          {
                          hardData.map((item, index) => {
                            return (
                              <option key={index} value={index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          softData.map((item, index) => {
                            return (
                              <option key={11 + index} value={11 + index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          pairData.map((item, index) => {
                            return (
                              <option key={19 + index} value={19 + index}>{item.content}</option>
                            );
                          })
                        }

                        </select>
                    }
                  </div>
                  
                    {
                      checkbox2 && 
                      <div className='col-md-6 blackBack yellowColor'>{playerCards.length > 2 && playData[playerCards[2]]}%</div>
                    }
                </div>
              </div>
            }
        </div>
      </div>
      <a href="https://buymeacoffee.com/blackjackstats" className='buymeacoffee' target="_blank" rel="noreferrer">
        <img src="https://media.giphy.com/media/hXMGQqJFlIQMOjpsKC/giphy.gif" alt="Buy Me a Coffee" />
      </a>
      <img src={backgroundImg} alt='background' className='backImg' />
    </div>
  );
}

export default App;
