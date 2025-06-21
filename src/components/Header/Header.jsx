import h from "./Header.module.scss"

export default function Header() {
  return (
    <header>
      <div className={h.container}>
        <h1 className={h.title}>Task Master</h1>
      </div>
    </header>
  )
}
