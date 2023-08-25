import React from 'react';
import './App.css';
import { useState } from 'react';
function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='container'>
            <div className='bloc-tabs'>
                <div
                    className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </div>
                <div
                    className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </div>
                <div
                    className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </div>
            </div>
            <div className='content-tabs'>
                <div
                    className={toggleState === 1 ? 'content active-content' : 'content'}
                >
                    <div className='left'>
                        <h2>content 1</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </div>
                    <div className='right'>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                    </div>
                </div>
                <div
                    className={toggleState === 2 ? 'content active-content' : 'content'}
                >
                    <div className='left'>
                        <h2>content 2</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </div>
                    <div className='right'>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                    </div>
                </div>
                <div
                    className={toggleState === 3 ? 'content active-content' : 'content'}
                >
                    <div className='left'>
                        <h2>content 3</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </div>
                    <div className='right'>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
