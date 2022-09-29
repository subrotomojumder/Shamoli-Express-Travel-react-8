import React from 'react';

const Question = () => {
    return (
        <div className='bg-cyan-500 py-12 px-[10%]'>
            <h2 className='text-center text-2xl font-semibold'>Question and Answer</h2>
            <hr />
            <div className='mt-6'>
                <p className='text-lg font-medium'>Q.1. How does React work ?</p>
                <p><span className='font-bold ml-4'>Ans:</span> React হলো user Interface তৈরি করার জন্য Java script এর building library ।
                    React এর মধ্যে JSX (Java script XML) Developer কে Markup language and Logical language একই ‍সাথে use করার সুযোগ করে দেয় ।
                    JSX এর Bable compiler use করে JSX code গুলোকে real Java script code এ convert render করে । React unidirectional ভাবে component data
                    send করে। React এ কোনো component এর পরিবর্তনের ‍পর render করার জন্য virtual DOM তৈরি করে । virtual DOM কে Real DOM এ convert
                    করার জন্য Diff Algorithm এর সাহায্য নেয় । User এর state পরিবর্তনের ফলে Virtual DOM যে change আসে Diff Algorithm সেটাকে Real DOM এ inject
                    represent করে দেয় । আর পদ্ধতিকে React representation বলা হয় ।
                </p>
            </div>
            <div className='mt-6'>
                <p className='text-lg font-medium'>Q.2. What difference between State and Props in React ? </p>
                <p><span className='font-bold ml-4'>Ans:</span><br />
                    <b>State:</b> React এ State বলতে user interaction এর উপর ভিত্তি Interface এর অবস্থার পরিবর্তন কে বুঝায় । React
                    state changeable । state change হয় asynchronous ভাবে । state component পরিবর্তনে dynamic rendering করে ।
                    state পরিবর্তন user ক্রিয়া বা সিস্টেম ইভেন্টের প্রতিক্রিয়া হিসাবে ঘটতে পারে । State শুধুমাত্র component এর inside এ
                    directly  অ্যাক্সেস বা পরিবর্তন করা যেতে পারে ।
                    <br />
                    <b>Props:</b> Properties এর short name Props । Props শুধু read করা যায় তবে modify করা যায় না । Props একটি component
                    থেকে অন্য component এ data পাঠানোর অনুমতি দেয় । prop parameter হিসাবে একটি component থেকে অন্য component গুলিতে arguments প্রেরণ করে ।
                    props এর value access হয় child হিসাবে ।
                </p>
            </div>
            <div className='mt-6'>
                <p className='text-lg font-medium'>Q.3. What is UseEffect use for ? without data fetch.</p>
                <p><span className='font-bold ml-4'>Ans:</span>
                    <li>validating input field</li>
                    <li>Running on state change</li>
                    <li>live filtering</li>
                    <li>trigger animation on new array value</li>
                    <li>update paragraph list on fetched API data</li>
                    <li>Running on props change</li>
                </p>
            </div>
        </div>
    );
};

export default Question;