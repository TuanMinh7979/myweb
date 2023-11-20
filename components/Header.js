import React, { useState } from "react";
import Link from 'next/link';
import { RiAlignCenter, RiCloseFill } from "react-icons/ri";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Header = ({ offMenu }) => {
const router = useRouter()
  const handleLinkClick = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sử dụng useEffect để thiết lập lắng nghe sự kiện khi component được tạo
  useEffect(() => {
    // Lấy tất cả các liên kết trong navbar và thêm sự kiện click cho chúng
    document.querySelectorAll('span[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleLinkClick);
    });

    // Xóa lắng nghe sự kiện khi component bị hủy
    return () => {
      document.querySelectorAll('span[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <span  class="nav__logo" onClick={() => router.push("/")}>
          <span class="nav__logo-circle">MT</span>
          <span class="nav__logo-name">To Minh Tuan</span>
        </span>
        <div
          class={`nav__menu ${showDropdownMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <span class="nav__title"></span>

          <h3 class="nav__name">Tô Minh Tuân</h3>

          <ul class="nav__list">
            <li class="nav__item">
              <span href="#home" class="nav__link active-link" onClick={() => router.push("/")}>
                Home
              </span>
            </li>
            {!offMenu && <>         <li class="nav__item">
              <span href="#about" class="nav__link">
                About Me
              </span>
            </li>
              <li class="nav__item">
                <span href="#projects" class="nav__link">
                  Projects
                </span>
              </li>
      
            </>
            }


          </ul>

          <div class="nav__close" id="nav-close">
            <RiCloseFill onClick={() => setShowDropdownMenu(false)} />
          </div>
        </div>

        <div class="nav__buttons">
          <i class="ri-moon-line change-theme" id="theme-button"></i>
          <div class="nav__toggle" id="nav-toggle">
            <RiAlignCenter onClick={() => setShowDropdownMenu(true)} />
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
