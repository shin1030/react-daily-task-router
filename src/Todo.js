import { useNavigate } from "react-router-dom"

export function Todo() {
  
  function LogOut() {
    const navigate = useNavigate()

    return (
      <button onClick={() => {
        navigate('/login')}}>
        Log Out
      </button>
    )
  }
  return (
    <>
      <LogOut />
      <p>這是 Todo 頁面</p>
    </>
  )

}
