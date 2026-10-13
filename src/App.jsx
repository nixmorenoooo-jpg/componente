import Card from './components/Card'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <Card
        usuario="Sara Lopez"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAhdk9eKpfHw7kQIdvGCgQIognEfCSvSbsPY7RtHgCdx2ANEGSrDGcLDL&s=10"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31Rn1zzSC9TFLh7Bg9Z429HZ79o0EAmCMsB3tPaO_98mClUhIKUXviRGT&s=10"
        likes={1.651}
        autor="Zara_"
        texto="."
      />
    </div>
  )
}