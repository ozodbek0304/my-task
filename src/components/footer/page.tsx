'use client'

import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-10">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Questions Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Savolingiz bormi?</h3>
            <p className="text-sm leading-relaxed">
              <span className="font-medium">info@topmavzular.uz</span> elektron pochta yoki{" "}
              <span className="font-medium">@topmavzular.uz</span> telegram manziliga yuboring. 
              Tez fursatlarda sizga javob qaytaramiz. Aslo tortinmang. 
              Sizga xizmat ko'rsatishdan doimo xursandmiz!
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Image 
                src="/placeholder.svg?height=40&width=40" 
                alt="Humo" 
                width={40} 
                height={40}
                className="rounded"
              />
              <Image 
                src="/placeholder.svg?height=40&width=40" 
                alt="Uzcard" 
                width={40} 
                height={40}
                className="rounded"
              />
              <Image 
                src="/placeholder.svg?height=40&width=40" 
                alt="Visa" 
                width={40} 
                height={40}
                className="rounded"
              />
              <Image 
                src="/placeholder.svg?height=40&width=40" 
                alt="Mastercard" 
                width={40} 
                height={40}
                className="rounded"
              />
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Ma'lumotlar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Sayt haqida
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Foydalanish qonun-qoidalari
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Buyurtma berish
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Kategoriyalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Referatlar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Kurs ishlar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Diplom ishlar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Biznes rejalar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Taqdimotlar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Statistika
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">‎</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Blanklar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Testlar To'plami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Namunaviy hujjatlar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Dars ishlanmalari
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Mustaqil ishlar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-200 transition-colors">
                  Boshqalar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © 2020-2025 Topmavzular.uz Barcha huquqlar amaldagi qonunchilikka binoan himoyalangan.
            <br />
            Sayt materiallaridan to'liq yoki qisman tijorat yo'lida foydalanish qat'iyan man etiladi!
          </p>
          <div className="flex items-center gap-1">
            <span>Yaratuvchi:</span>
            <Link 
              href="https://areainfo.uz" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              www.areainfo.uz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

