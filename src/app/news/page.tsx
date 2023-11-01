"use client"
import React, { useEffect } from 'react'

function NewsPage() {
    // Get news from any api
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // get news from /api/news
    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

       return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#15132f] w-full p-6 md:p-12 lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full z-20">
        <p className="blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Latest Units</p>
        <img className="w-12 md:w-32" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-creative-idea-6374843-5272689.png?f=webp" alt="" />
      </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 md:mt-20">
                {
                    news.map((item, index) => (
                        <li key={index} className="pb-4 overflow-hidden flex flex-col rounded-lg shadow-md text-center blueGrad2 group text-black">
                            <img className="h-[200px] w-full" src={item.urlToImage} alt="" />
                            <div className="pt-4 px-2">
                                <p className="text-lg text-left font-bold opacity-80 leading-5">{item.title}</p>
                                <div className="flex space-x-1 text-sm text-gray-500 mt-4 w-full justify-end">
                                    <time dateTime="2023-10-23">{item.publishedAt}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{item.author}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            </main>
            </>
    )




}

export default NewsPage