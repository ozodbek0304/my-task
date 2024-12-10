"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { cn } from "@/lib/utils"



const formSchema = z.object({
    email: z.string().email({
        message: "Noto'g'ri email formati.",
    }),
    password: z.string().min(1, {
        message: "Parol kamida 1 ta belgidan iborat bo'lishi kerak.",
    }),
    rememberMe: z.boolean().default(false),
})

interface Props {
    setToken: (value: boolean) => void;
}

export default function LoginForm({ setToken }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (values?.email === "ozodbek@gmail.com" && values?.password === "1") {
            setToken(true);
        }
    }


    return (
        <div className="flex justify-center items-center w-full h-[100vh]"
            style={{
                backgroundImage: `url(./login.jpg)`,
                backgroundSize: "cover",
            }}
        >
            <Card className="w-full max-w-md mx-auto px-4 py-8">
                <CardHeader className="space-y-3">
                    <CardTitle className="text-2xl text-center">Login to Account</CardTitle>
                    <p className="text-sm text-muted-foreground text-center">
                        Please enter your email and password to continue
                    </p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email address:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="ozodbek@gmail.com"
                                                {...field}
                                                className={cn("", {
                                                    "border-destructive focus:border-destructive":
                                                        !!form.formState.errors.email,
                                                })}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            <Link
                                                href="/forgot-password"
                                                className="text-sm text-blue-500 hover:text-blue-600"
                                            >
                                                Forget Password?
                                            </Link>
                                        </div>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                {...field}
                                                className={cn("", {
                                                    "border-destructive focus:border-destructive":
                                                        !!form.formState.errors.password,
                                                })}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="rememberMe"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>Remember Password</FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                                Sign In
                            </Button>
                        </form>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        {"Don't have an account? "}
                        <Link href="/create-account" className="text-blue-500 hover:text-blue-600">
                            Create Account
                        </Link>
                    </div>
                </CardContent>
            </Card>

        </div>
    );


}

