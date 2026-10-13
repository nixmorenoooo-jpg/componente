import { useState } from 'react'

export default function Card({ usuario, avatar, imagen, likes, autor, texto }) {
  const [meGusta, setMeGusta] = useState(false)
  const [siguiendo, setSiguiendo] = useState(false)

  return (
    <div className="w-80 rounded-3xl p-[2px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-xl">
      <div className="bg-slate-900 rounded-[22px] overflow-hidden text-white">

        {/* Imagen con el usuario encima */}
        <div className="relative">
          <img src={imagen} alt="publicación" className="w-full h-80 object-cover" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 bg-gradient-to-b from-black/70 to-transparent">
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                alt={usuario}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-pink-400"
              />
              <span className="font-semibold text-sm">@{usuario}</span>
            </div>
            <button
              onClick={() => setSiguiendo(!siguiendo)}
              className={`text-xs px-3 py-1 rounded-full border transition ${
                siguiendo
                  ? 'bg-white text-slate-900 border-white'
                  : 'border-white/70 hover:bg-white/20'
              }`}
            >
              {siguiendo ? 'Siguiendo' : 'Seguir'}
            </button>
          </div>
        </div>

        {/* Parte de abajo */}
        <div className="p-4 space-y-2">
          <button
            onClick={() => setMeGusta(!meGusta)}
            className="flex items-center gap-2 text-sm hover:scale-105 transition"
          >
            <span className="text-xl">{meGusta ? '❤️' : '🤍'}</span>
            <span className="text-slate-300">{meGusta ? likes + 1 : likes} me gusta</span>
          </button>
          <p className="text-sm text-slate-200">
            <span className="font-bold text-pink-400">{autor}</span> {texto}
          </p>
        </div>
      </div>
    </div>
  )
}