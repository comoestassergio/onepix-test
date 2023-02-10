import { memo } from "react"
import styles from './Logo.module.scss'


type Props = {
    width: string
    height: string
    className?: string
}


function Logo () {
    return (
        <svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M76.1886 0.00525042L76.1981 0V0.0106587C79.1733 1.64861 134.43 32.0265 134.43 32.0265C134.71 32.1296 152.381 39.5001 152.381 51.3731V53.5505C152.381 62.5064 142.321 68.8688 137.525 71.3972C134.35 69.6923 108.648 55.6303 91.4343 46.212L91.4176 46.2029L91.4095 46.1985C83.6933 41.9769 77.6881 38.691 76.1895 37.8739C75.4057 38.3048 20.6252 68.4136 14.1543 71.7305C8.89581 74.4778 2.96401 78.6052 0 84.1655V51.3577C0 39.5001 17.6693 32.1309 17.8647 32.0693C17.8647 32.0693 73.2071 1.64018 76.1786 0.0106587V0L76.1886 0.00525042ZM76.1786 149.989V149.997C76.1814 149.995 76.1838 149.993 76.1862 149.992C76.1905 149.995 76.1943 149.997 76.1981 150V149.985C79.1733 148.357 134.522 117.938 134.522 117.938C134.709 117.868 152.381 110.496 152.381 98.6391V65.8317C149.409 71.3864 143.486 75.5194 138.228 78.2475C131.757 81.5817 76.9762 111.691 76.1876 112.124C71.3581 109.471 19.4544 81.0722 14.857 78.6047C10.0635 81.1331 0 87.4866 0 96.442V98.6264C0 110.499 17.6693 117.857 17.9545 117.971C17.9545 117.971 73.2081 148.342 76.1786 149.989Z" fill="white"/>
            <path d="M342.54 23.6567C340.306 23.6567 338.496 25.4395 338.496 27.6388V105.849C338.496 108.048 340.306 109.831 342.54 109.831H348.936C351.17 109.831 352.982 108.048 352.982 105.849V27.6388C352.982 25.4395 351.17 23.6567 348.936 23.6567H342.54Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M297.071 44.2034C287.388 44.2034 279.409 47.6254 273.862 53.6826C268.328 59.7276 265.303 68.2954 265.303 78.4447C265.303 87.9894 268.399 96.2741 274.054 102.182C279.715 108.098 287.859 111.543 297.768 111.543C310.009 111.543 321.36 105.035 326.314 93.4977L326.805 92.354L312.811 87.898L312.377 88.8013C309.455 94.8754 304.089 97.9668 297.071 97.9668C292.006 97.9668 288.154 96.3505 285.448 93.5169C282.935 90.8849 281.314 87.1026 280.725 82.3218H327.271L327.331 81.246C327.92 70.5688 325.66 61.3124 320.544 54.6974C315.401 48.0458 307.475 44.2034 297.071 44.2034ZM297.084 57.0946C302.257 57.0397 305.771 58.4038 308.143 60.8029C310.331 63.0144 311.683 66.2408 312.336 70.4577H281.175C281.992 66.4804 283.554 63.261 285.896 60.9913C288.468 58.4985 292.096 57.0407 297.058 57.0951L297.084 57.0946Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M395.796 44.2057C386.285 44.2057 378.314 47.5992 372.726 53.5607C367.147 59.5138 364.028 67.9392 364.028 77.8748C364.028 87.6346 367.058 96.0571 372.59 102.054C378.133 108.061 386.106 111.544 395.796 111.544C405.423 111.544 413.425 108.122 419.012 102.145C424.591 96.1771 427.682 87.7518 427.682 77.8748C427.682 68.1145 424.652 59.691 419.103 53.6943C413.546 47.6863 405.543 44.2057 395.796 44.2057ZM379.212 77.8748C379.212 71.7388 380.575 66.711 383.278 63.2423C385.943 59.8213 390.02 57.7809 395.796 57.7809C401.468 57.7809 405.578 59.744 408.298 63.1279C411.052 66.5526 412.499 71.5757 412.499 77.8748C412.499 84.0009 411.082 89.0292 408.336 92.5003C405.624 95.9292 401.515 97.9687 395.796 97.9687C390.247 97.9687 386.164 96.0098 383.44 92.6212C380.684 89.1937 379.212 84.1687 379.212 77.8748Z" fill="white"/>
            <path d="M487.495 50.3077C481.509 45.1374 474.208 43.8511 467.29 44.3196C461.434 44.6728 454.986 46.7884 450.664 51.4964V49.8975C450.664 47.6981 448.852 45.9151 446.618 45.9151H441.612C439.379 45.9151 437.568 47.6981 437.568 49.8975V105.848C437.568 108.047 439.379 109.83 441.612 109.83H448.009C450.243 109.83 452.054 108.047 452.054 105.848V81.6398C452.054 77.1398 452.062 72.6103 452.837 69.3436L452.849 69.2878C453.508 65.7145 455.14 62.6878 457.526 60.848L457.546 60.8325C459.867 58.9631 462.745 57.998 466.028 57.7786C470.217 57.6741 473.712 58.7648 476.093 60.9066L476.121 60.93C478.319 62.7848 479.676 65.37 480.476 68.5191C481.286 71.6784 481.514 75.3342 481.514 79.2422V105.848C481.514 108.047 483.329 109.83 485.562 109.83H492.076C494.309 109.83 496.119 108.047 496.119 105.848V78.7931C496.233 68.5805 495.59 57.3131 487.495 50.3077Z" fill="white"/>
            <path d="M207.7 45.9166C204.377 45.9166 202.472 49.6428 204.451 52.2706L223.482 77.5325L203.977 103.481C202.001 106.109 203.907 109.832 207.229 109.832H214.404C215.698 109.832 216.914 109.223 217.675 108.193L231.99 88.8293L246.193 108.182C246.955 109.218 248.174 109.832 249.473 109.832H256.627C259.951 109.832 261.858 106.1 259.871 103.474L240.276 77.5306L259.304 52.2706C261.285 49.6428 259.379 45.9166 256.056 45.9166H248.898C247.595 45.9166 246.372 46.5336 245.612 47.5742L231.987 66.2323L218.14 47.5512C217.378 46.5241 216.164 45.9166 214.871 45.9166H207.7Z" fill="white"/>
        </svg>
    )
}


export default memo(Logo)

