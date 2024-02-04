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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be valid.",
  }),
});

export default function Subscribe() {
  // don't show on contact page
  const { pathname } = useLocation();

  if (pathname === "/contact") return null;
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    form.reset();
    return () => {};
  }, [pathname]);

  function onSubmit(values) {
    setTimeout(() => {
      form.reset();
    }, 2000);
  }

  return (
    <section className="w-full p-4 container mx-auto max-w-2xl border-x border-t border-border/40">
      <Form {...form}>
        <div>{form.formState.isSubmitting}</div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field, _ }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="flex min-w-full max-w-sm items-center space-x-2 ">
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormControl>
                    <Button variant="outline" type="submit">
                      Subscribe
                    </Button>
                  </FormControl>
                </div>
                <FormDescription>
                  Subscribe to our newsletter not to miss the changes.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
}
