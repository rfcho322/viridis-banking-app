import { cn } from '@/lib/utils'
import React from 'react'

const Transfer = ({ IconColor }: { IconColor: string }) => {
    return (
        <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.6871 14.843C21.7793 14.843 25.1081 11.5137 25.1081 7.42151C25.1081 3.32931 21.7793 0 17.6871 0C13.5949 0 10.2656 3.32931 10.2656 7.42151C10.2656 11.5137 13.5949 14.843 17.6871 14.843ZM16.8082 3.05919V2.85763C16.8082 2.37188 17.2014 1.97872 17.6871 1.97872C18.1723 1.97872 18.566 2.37188 18.566 2.85763V3.06036C19.6119 3.28478 20.3989 4.21642 20.3989 5.32853C20.3989 5.81369 20.0051 6.20744 19.52 6.20744C19.0342 6.20744 18.641 5.81369 18.641 5.32853C18.641 5.01857 18.3885 4.76603 18.0785 4.76603H17.2905C16.9805 4.76603 16.728 5.01857 16.728 5.32853C16.728 5.50607 16.8129 5.67482 16.9559 5.78029L17.6871 6.3217L19.4637 7.63655C20.0473 8.06838 20.3989 8.75921 20.4035 9.48577V9.49397C20.4076 10.1139 20.1703 10.6987 19.7344 11.1399C19.411 11.4674 19.0067 11.6871 18.566 11.7797V11.9854C18.566 12.4711 18.1723 12.8643 17.6871 12.8643C17.2014 12.8643 16.8082 12.4711 16.8082 11.9854V11.7827C16.3793 11.6912 15.985 11.4803 15.6662 11.1651C15.225 10.7297 14.9801 10.1485 14.9766 9.52855C14.9736 9.04339 15.3645 8.64729 15.8496 8.64436H15.8555C16.3383 8.64436 16.7315 9.0346 16.7344 9.518C16.7356 9.82134 16.9796 10.077 17.2998 10.077C17.7855 10.0741 17.6046 10.0751 18.0867 10.0723C18.3987 10.0698 18.6481 9.81665 18.6457 9.50569V9.49749C18.6446 9.32171 18.5596 9.15413 18.4178 9.04925L17.6871 8.50843L15.91 7.19358C15.3217 6.75764 14.9701 6.06037 14.9701 5.32853C14.9701 4.21408 15.7594 3.28185 16.8082 3.05919Z"
                className={IconColor} />
            <path d="M5.66251 19.066C5.43721 18.6754 4.93676 18.5395 4.54377 18.7662L0.409502 21.1528C0.018036 21.3793 -0.116261 21.88 0.109736 22.272L4.33518 29.5905C4.56135 29.9819 5.06174 30.1163 5.45391 29.8903L9.58818 27.5032C9.98024 27.2771 10.114 26.7764 9.88795 26.3844L5.66251 19.066Z"
                className={IconColor}
            />
            <path d="M29.3515 17.6051C28.9536 17.0525 28.1837 16.9277 27.6318 17.3256C25.9571 18.532 22.7415 20.8488 22.486 21.0334C22.3683 21.1336 22.2446 21.2244 22.1157 21.3047C21.6101 21.6229 21.0235 21.7928 20.4112 21.7928H16.2012C15.7161 21.7928 15.3223 21.3996 15.3223 20.9139C15.3223 20.4276 15.7167 20.035 16.2012 20.035H20.7036C21.3651 20.035 21.8948 19.4842 21.8673 18.8215C21.8415 18.1928 21.3048 17.7053 20.6755 17.7053H17.2483C17.0163 17.4598 16.762 17.2348 16.4895 17.0338C15.5526 16.343 14.3948 15.9346 13.1415 15.9346C10.9131 15.9346 8.69595 17.3385 7.77661 19.2123L11.3719 25.4391H18.1161C19.4403 25.4391 20.7446 25.1004 21.8925 24.4401C22.2903 24.2115 22.7163 23.9367 23.178 23.6051C25.1128 22.2153 29.0685 19.3277 29.0714 19.326C29.6245 18.9287 29.7499 18.1576 29.3515 17.6051Z"
                className={IconColor}
            />
        </svg>
    )
}

const PaymentTransfer = ({ selected }: { selected: boolean }) => {
    return (
        <svg
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_78_401)">
                <path d="M14.4923 15.3372C18.6873 15.3372 22.1002 11.8971 22.1002 7.66863C22.1002 3.44019 18.6873 0 14.4923 0C10.2974 0 6.88452 3.44014 6.88452 7.66858C6.88452 11.897 10.2974 15.3372 14.4923 15.3372ZM12.0477 10.0616C12.269 9.72331 12.7227 9.62835 13.061 9.84975C13.5539 10.1722 13.7399 10.2019 14.3903 10.1973C15.0252 10.1931 15.3936 9.71994 15.4672 9.28202C15.503 9.06901 15.5167 8.54886 14.872 8.32097C14.1159 8.05365 13.3421 7.74812 12.8037 7.32586C12.2654 6.9036 12.0188 6.17464 12.1604 5.42358C12.3139 4.60936 12.8818 3.96121 13.6427 3.73205C13.6496 3.73 13.6563 3.72835 13.6632 3.7263V3.44882C13.6632 3.04457 13.9909 2.71684 14.3952 2.71684C14.7994 2.71684 15.1272 3.04457 15.1272 3.44882V3.68018C15.6243 3.79886 15.9715 4.02631 16.1125 4.13167C16.4363 4.37376 16.5026 4.83242 16.2605 5.15625C16.0185 5.48009 15.5598 5.54635 15.236 5.30421C15.086 5.19207 14.6714 4.95101 14.0649 5.13376C13.7106 5.24053 13.6187 5.59013 13.599 5.6947C13.5603 5.9002 13.6037 6.09281 13.7072 6.17391C14.0803 6.46661 14.7521 6.72578 15.3599 6.94064C16.4808 7.33684 17.1041 8.37529 16.9109 9.5247C16.8161 10.0887 16.5323 10.6119 16.1119 10.9981C15.8256 11.2613 15.4923 11.4488 15.1272 11.556V11.8883C15.1272 12.2926 14.7994 12.6203 14.3952 12.6203C13.9909 12.6203 13.6632 12.2926 13.6632 11.8883V11.629C13.1899 11.5716 12.7926 11.4236 12.2595 11.0748C11.9213 10.8535 11.8264 10.3999 12.0477 10.0616Z"
                    className={cn('fill-[#B1B1B1]', { 'fill-green-500': selected })}
                />
                <path d="M2.77449 17.7968H1.10546C0.701209 17.7968 0.373474 18.1245 0.373474 18.5287V24.267C0.373474 24.6713 0.701209 24.999 1.10546 24.999H2.77453V17.7968H2.77449Z"
                    className={cn('fill-[#B1B1B1]', { 'fill-green-500': selected })}
                />
                <path d="M24.4119 17.7457C23.0399 16.3737 20.8075 16.3736 19.4356 17.7457L17.2429 19.9384L16.3442 20.8371C15.981 21.2003 15.4883 21.4044 14.9746 21.4044H10.6045C10.2098 21.4044 9.87015 21.101 9.85155 20.7068C9.83174 20.2859 10.1671 19.9384 10.5837 19.9384H15.0257C15.9188 19.9384 16.6935 19.3025 16.847 18.4227C16.8823 18.2207 16.9007 18.0129 16.9007 17.801C16.9007 17.396 16.5726 17.0674 16.1677 17.0674H13.7337C12.9383 17.0674 12.1744 16.7065 11.3657 16.3244C10.5174 15.9238 9.6403 15.5094 8.61469 15.4412C7.71767 15.3814 6.81859 15.4796 5.94231 15.7327C5.00405 16.0036 4.3296 16.8372 4.24781 17.7996C4.24469 17.7993 4.24151 17.7993 4.23834 17.7991V24.9965L16.8493 25C17.7164 25 18.5316 24.6623 19.1449 24.0491L24.4117 18.7823C24.6981 18.4961 24.6981 18.0319 24.4119 17.7457Z"
                    className={cn('fill-[#B1B1B1]', { 'fill-green-500': selected })}
                />
            </g>
            <defs>
                <clipPath id="clip0_78_401">
                    <rect width="25" height="25" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}


export { Transfer, PaymentTransfer }
