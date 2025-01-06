"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Validation schema
const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company is required"),
  designation: Yup.string().required("Designation is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string().required("Mobile number is required"),
  location: Yup.string().required("Location is required"),
});

// Form field animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AnimatedForm({
  formSectionRef,
  isFormSectionInView,
}: {}) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-900">
          Contact Us
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{
            name: "",
            company: "",
            designation: "",
            email: "",
            mobile: "",
            location: "",
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                ref={formSectionRef}
              >
                {/* Name Field */}
                <motion.div variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className={
                        errors.name && touched.name ? "border-red-500" : ""
                      }
                    />
                    {errors.name && touched.name && (
                      <div className="text-sm text-red-500">{errors.name}</div>
                    )}
                  </div>
                </motion.div>

                {/* Company Field */}
                <motion.div variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Field
                      as={Input}
                      id="company"
                      name="company"
                      placeholder="Enter company name"
                      className={
                        errors.company && touched.company
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {errors.company && touched.company && (
                      <div className="text-sm text-red-500">
                        {errors.company}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={
                        errors.email && touched.email ? "border-red-500" : ""
                      }
                    />
                    {errors.email && touched.email && (
                      <div className="text-sm text-red-500">{errors.email}</div>
                    )}
                  </div>
                </motion.div>

                {/* Mobile Field */}
                <motion.div variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile</Label>
                    <Field
                      as={Input}
                      id="mobile"
                      name="mobile"
                      placeholder="Enter mobile number"
                      className={
                        errors.mobile && touched.mobile ? "border-red-500" : ""
                      }
                    />
                    {errors.mobile && touched.mobile && (
                      <div className="text-sm text-red-500">
                        {errors.mobile}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Designation Field */}
                <motion.div variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Field
                      as={Input}
                      id="designation"
                      name="designation"
                      placeholder="Enter your designation"
                      className={
                        errors.designation && touched.designation
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {errors.designation && touched.designation && (
                      <div className="text-sm text-red-500">
                        {errors.designation}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Location Field */}
                <motion.div variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Field
                      as={Input}
                      id="location"
                      name="location"
                      placeholder="Enter your location"
                      className={
                        errors.location && touched.location
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {errors.location && touched.location && (
                      <div className="text-sm text-red-500">
                        {errors.location}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={fieldVariants}
                  className="md:col-span-2 flex justify-center mt-4"
                >
                  <Button type="submit" className="w-full md:w-full bg-primary">
                    Submit
                  </Button>
                </motion.div>
              </motion.div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
