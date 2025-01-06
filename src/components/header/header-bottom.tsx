import React from 'react'
import { Button } from '../ui/button'
import ParamInput from '../param/input'
import { Heart, ShoppingCart, User } from 'lucide-react'
import { Card } from '../ui/card'

const HeaderBottom = () => {
    return (
        <Card className='rounded-none py-6 flex items-center  mb-5'>
            <nav className='flex justify-between h-full items-center gap-5 container'>
                <div className='flex items-center gap-3'>
                    <Button className='bg-primary'>Logotip</Button>
                    <Button className='bg-primary'>Kategoriyalar</Button>
                </div>
                <div className='flex-1 w-full'>
                    <ParamInput className="w-full" fullWidth />
                </div>
                <div className='flex items-center gap-3'>
                    <Button variant={"outline"} className='text-[13px] gap-1'><Heart className='w-5 h-5' /> Sevimli</Button>
                    <Button variant={"outline"} className='text-[13px] gap-1'><ShoppingCart className='w-5 h-5' /> Korzinka</Button>
                    <Button variant={"outline"} className='text-[13px] gap-1'><User className='w-5 h-5' /> Kirish</Button>
                </div>
            </nav>
        </Card>
    )
}

export default HeaderBottom