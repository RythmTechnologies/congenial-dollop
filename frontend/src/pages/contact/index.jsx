import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email must be valid.",
    })
    .min(1, {
      message: "Email is required",
    }),
  name: z.string().min(1, { message: "İsim alanı boş bırakılamaz." }),
  phone: z
    .string()
    .min(10, { message: "Telefon numarası en az 10 karakter olmalıdır." })
    .regex(/^\d+$/, {
      message: "Telefon numarası sadece rakamlardan oluşmalıdır.",
    }),
  message: z
    .string()
    .min(1, { message: "Mesaj alanı boş bırakılamaz." })
    .max(10, { message: "Mesajınız en fazla 255 karakter olabilir." }),
});

export default function Subscribe() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values) {
    setTimeout(() => {
      form.reset();
      form.setFocus("email");
    }, 2000);
  }

  return (
    <div className="flex-1 py-4">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-4 px-4">
        Contact Us
      </h1>
      <main className="">
        <div className=" px-4 sm:px-0 sm:py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field, _ }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-x-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, _ }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field, _ }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="5xx xxx xx xx" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field, _ }) => (
                  <FormItem>
                    <FormLabel>How can we help you?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        rows={5}
                        className="resize-none	"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem className="text-end">
                <Button type="submit">Submit</Button>
              </FormItem>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
