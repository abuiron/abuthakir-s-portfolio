import React from "react";
import Title from "../home/Title";
import { blogImgOne, 
  blogImgTwo, 
  blogImgThree, 
  blogImg4, 
  blogImg5, 
  blogImg6, 
  blogImg7, 
  blogImg8, 
  blogImg9, 
  blogImg10,
  blogImg11,
  blogImg12,
  blogImg13,
  blogImg14,
  blogImg15
             } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="My" subTitle="Feats" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <BlogCard
            image={blogImgTwo}
            title="Present"
            subTitle="Looking for a Software Developer Role"
            category="Job Seeking"
            />

          <BlogCard
            image={blogImg4}
            title="07/2024"
            subTitle="MERN Stack Development Internship"
            category="Zidio Development pvt ltd"
            />
          
          <BlogCard
            image={blogImg5}
            title="03/2024"
            subTitle="Python Development Internship"
            category="Techno Hacks"
            />
          
          <BlogCard
            image={blogImg6}
            title="12/2023"
            subTitle="Web Development Internship"
            category="The Website Makers"
            />
          <BlogCard
            image={blogImg10}
            title="Gold Medal"
            subTitle="Won 1st Prize for Web Desighning"
            category="State Level Symposium"
            />
            <a href="https://www.guvi.in/code-kata/">
          <BlogCard
            image={blogImg11}
            title="Present"
            subTitle="100+ problem solved in Codekata platform"
            category="Problem Solving"
            />
            </a>
            <a href="https://www.geeksforgeeks.org">
          <BlogCard
            image={blogImg14}
            title="Present"
            subTitle="Maintaining Streaks from Geeks For Geeks"
            category="Problem Solving"
            />
            </a>
            <a href="https://leetcode.com">
          <BlogCard
            image={blogImg15}
            title="Present"
            subTitle="Maintaining Streaks from Leetcode"
            category="Problem Solving"
            />
            </a>
        </div>
        <div className="px-6" >

        <BlogCard
            image={blogImgOne}
            title="Present"
            subTitle="Currently working on New Projects"
            category="Project"
          />
          <a href="https://www.guvi.in/certificate?id=y67862T95J00Q16qOP&download=true">
          <BlogCard
            image={blogImgThree}
            title="09/2024"
            subTitle="Completed MERN Stack developer course in GUVI IIT-MADRAS"
            category="Course"
          />
          </a>
          <BlogCard
            image={blogImg7}
            title="05/2024"
            subTitle="Completed AI Prompt Engineer in Institute of Technology, Management & Finance"
            category="Course"
            />

          <BlogCard
            image={blogImg8}
            title="12/2023"
            subTitle="Completed Python Development course in LIVEWIRE"
            category="Course"
            />

          <BlogCard
           image={blogImg12}
           title="10/2023"
           subTitle="Completed Web Development course in IBM-SkillsBuild"
           category="Course"
           />
           
          <BlogCard
           image={blogImg13}
           title="04/2023"
           subTitle="Completed Network Engineer course in LIVEWIRE"
           category="Course"
          />


          <BlogCard
            image={blogImg9}
            title="11/2021"
            subTitle="Completed Network Engineer course in LIVEWIRE"
            category="Course"
            />

        </div>
      </div>
    </div>
  );
};

export default Blog;
