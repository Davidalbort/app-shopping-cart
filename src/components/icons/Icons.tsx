export function AddToCart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      name="Add to cart"
    >
      <circle cx="10.5" cy="19.5" r="1.5"></circle>
      <circle cx="17.5" cy="19.5" r="1.5"></circle>
      <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
    </svg>
  )
}

export function RemoveCart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M17 17a2 2 0 1 0 2 2"></path>
      <path d="M17 17h-11v-11"></path>
      <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"></path>
      <path d="M3 3l18 18"></path>
    </svg>
  )
}
