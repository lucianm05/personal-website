import Image from 'next/image';

const Logo = () => {
  return <Image src={'/images/logo.png'} alt='Logo' width={759} height={313} quality={100} />
}

export default Logo;