import { AlignJustify, Search } from 'lucide-react'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '../ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { SidebarTrigger, useSidebar } from '../ui/sidebar'
const langData = [
  {
    id: 1,
    lang: "English",
    image: "/en.png",
    value: "en",
  },
  {
    id: 2,
    lang: "Russian",
    image: "/ru.png",
    value: "ru",
  },
  {
    id: 3,
    lang: "Uzbek",
    image: "/uz.png",
    value: "uz",
  }
]

export function DashboardHeader() {
  const { toggleSidebar } = useSidebar();


  return (
    <header className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <div className="w-full flex items-center space-x-4">
        <AlignJustify className='w-6 h-5 ' onClick={toggleSidebar} />
        <div className="flex-1 max-w-xl w-full relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10  pr-4 py-2 h-[40px] bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Select defaultValue="en">
          <SelectTrigger className="max-w-[150px] min-w-[120px] border-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {
              langData?.map(item => (
                <SelectItem value={item?.value} key={item?.id}>
                  <div className="flex items-center">
                    <Image src={item.image} alt="English" width={24} height={24} className="mr-2 rounded-full" />
                    {item.lang}
                  </div>
                </SelectItem>
              ))
            }

          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className='bg-red-200 font-bold text-red-500'>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Username</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}

