'use client'

// import { MenuAuth } from '@/modules/Authentication'
import { Navbar } from '../components/Navbar'
import { useMenuNav } from '../hooks'

export const NavigationTemplate = () => {
  const {
    isMenuOpen,
    menus,
    // toggleMenu,
    // signIn,
    // data
  } = useMenuNav()
  return (
    <Navbar
      logo="/logo_coqueirodigital_brand_horizontal.png"
      menus={menus}
      isMenuOpen={isMenuOpen}
    >
      {/* <MenuAuth
        icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'}
        onClick={data?.user ? toggleMenu : () => signIn()}
        data={data}
      /> */}
    </Navbar>
  )
}
