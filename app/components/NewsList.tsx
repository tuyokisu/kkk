import { NewsDates } from '@/information'
import React from 'react'
const sortedNews = [...NewsDates].sort((a, b) => b.id - a.id);
const NewsList = () => {
  return (
    
    <div> <section id="news" className="py-20 px-4 max-w-4xl mx-auto ">
            <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">NEWS</h2>
            <div className="space-y-6">
                {sortedNews.map((item) => (
                    <div key={item.id}className="block group">
                        <div className="flex flex-col md:flex-row md:items-center border-b border-white/10 pb-6 ">
                            <span className="text-gray-400 font-mono mb-2 md:mb-0 md:w-32">{item.date}</span>
                            <span className="text-lg  ">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
  )
}

export default NewsList

