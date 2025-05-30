"use server";

import { CreateCourse, Course } from "@/interfaces";
import axiosInstance from "@/lib/axios";

export async function createCourse(formData: CreateCourse) {
  try {
    const res = await axiosInstance.post("/courses", formData);
    return {
      success: true,
      data: res.data,   
    };
  } catch (error: unknown) {
    console.error("Create course error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to create course";
    return {
      success: false,
      error: errorMessage
    };
  }
}

export async function getAllCourses() {
  try {
    const res = await axiosInstance.get("/courses");
    return {
      success: true,
      data: res.data.data
    };
  } catch (error: unknown) {
    console.error("Get courses error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch courses";
    return {
      success: false,
      error: errorMessage
    };
  }
}

export async function deleteCourse(courseId: string) {
  try {
    const res = await axiosInstance.delete(`/courses/${courseId}`);
    return {
      success: true,
      data: res.data
    };
  } catch (error: unknown) {
    console.error("Delete course error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to delete course";
    return {
      success: false,
      error: errorMessage
    };
  }
}

export async function getCourse(courseId: string) {
  try {
    const res = await axiosInstance.get(`/courses/${courseId}`);
    return {
      success: true,
      data: res.data.data
    };
  } catch (error: unknown) {
    console.error("Get course error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch course";
    return {
      success: false,
      error: errorMessage
    };
  }
}

export async function updateCourse(courseId: string, formData: Partial<Course>) {
  try {
    const res = await axiosInstance.put(`/courses/${courseId}`, formData);
    return {
      success: true,
      data: res.data
    };
  } catch (error: unknown) {
    console.error("Update course error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to update course";
    return {
      success: false,
      error: errorMessage
    };
  }
}
