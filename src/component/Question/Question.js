import React from 'react';

const Question = () => {
    return (
        <div className='bg-cyan-500 py-12 px-[10%]'>
            <h2 className='text-center text-2xl font-semibold'>Question and Answer</h2>
            <hr />
            <div className='mt-4'>
                <p className='text-lg font-medium'>Q.1. How does React work ?</p>
                <p><span className='font-bold ml-4'>Ans:</span> React হলো user Interface তৈরি করার জন্য Java script এর building library । 
                React এর মধ্যে JSX (Java script XML) Developer কে Markup language and Logical language একই ‍সাথে use করার সুযোগ করে দেয় ।
                JSX এর Bable compiler use করে JSX code গুলোকে real Java script code এ convert render করে । React unidirectional ভাবে component data
                 send করে। React এ কোনো component এর পরিবর্তনের ‍পর render করার জন্য virtual DOM তৈরি করে । virtual DOM কে Real DOM এ convert 
                  করার জন্য Diff Algorithm এর সাহায্য নেয় । User এর state পরিবর্তনের ফলে Virtual DOM যে change আসে Diff Algorithm সেটাকে Real DOM এ inject 
                  represent করে দেয় । আর পদ্ধতিকে React representation বলা হয় ।
                  </p>
            </div>
        </div>
    );
};

export default Question;