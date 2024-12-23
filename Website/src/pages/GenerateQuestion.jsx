import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './GenerateQuestion.css';

export default function GenerateQuestion() {
  const [questions] = useState({
    subject: "Data Structure and Algorithm",
   "mcq": [
          {
            "question": "Which of the following data structures uses the LIFO (Last-In, First-Out) principle?",
            "options": [
              "Queue",
              "Stack",
              "Linked List",
              "Binary Tree"
            ]
          },
          {
            "question": "What is the time complexity of searching for an element in a sorted array using binary search?",
            "options": [
              "O(n)",
              "O(n^2)",
              "O(log n)",
              "O(1)"
            ]
          },
          {
            "question": "Which of the following is NOT a graph traversal algorithm?",
            "options": [
              "Breadth-First Search (BFS)",
              "Depth-First Search (DFS)",
              "Merge Sort",
              "Dijkstra's Algorithm"
            ]
          },
          {
            "question": "A binary tree where the value of each node is greater than the values of its children is called:",
            "options": [
              "Binary Search Tree (BST)",
              "Max Heap",
              "Min Heap",
              "Complete Binary Tree"
            ]
          },
          {
            "question": "What is the average case time complexity of insertion sort?",
            "options": [
              "O(n)",
              "O(n log n)",
              "O(n^2)",
              "O(1)"
            ]
          }
        ],
    saq: [
      "Explain the difference between a stack and a queue.",
      "What is the purpose of a hash table, and how does it work?",
      "Define Big O notation and explain its significance in algorithm analysis.",
      "Describe the difference between a complete binary tree and a full binary tree.",
      "What is the advantage of using a heap data structure?"
    ],
    laq: [
      "Compare and contrast the performance characteristics of different sorting algorithms (e.g., merge sort, quick sort, insertion sort) considering best-case, average-case, and worst-case scenarios. Discuss when each algorithm might be preferred.",
      "Explain the concept of dynamic programming and illustrate its application with a specific example problem (e.g., Fibonacci sequence, knapsack problem). Discuss the trade-offs between space and time complexity in dynamic programming solutions.",
      "Describe how a graph is represented using adjacency matrices and adjacency lists. Compare and contrast the advantages and disadvantages of each representation.",
      "Discuss the different types of tree traversals (preorder, inorder, postorder) and explain when each traversal might be useful. Provide examples to illustrate your answer.",
      "Design an algorithm to detect cycles in a directed graph using Depth-First Search (DFS). Explain how the algorithm works and analyze its time and space complexity. Discuss any optimizations that can be made."
    ]
  });

const downloadPDF = () => {
    const doc = new jsPDF();
    const content = document.querySelector('.inner-container');
  
    // Temporarily remove the download button from the DOM to avoid including it in the PDF
    const downloadButton = document.querySelector('.download-button');
    downloadButton.style.display = 'none';
  
    // Define margins and starting position for content rendering
    const margin = 10;
    let currentY = margin;
  
    // Render Subject Heading
    doc.setFontSize(16);
    doc.text("Subject: " + questions.subject, margin, currentY);
    currentY += 10;
  
    // Render MCQ Section
    doc.setFontSize(12);
    doc.text("Multiple Choice Questions (MCQs)", margin, currentY);
    currentY += 10;
  
    questions.mcq.forEach((q, index) => {
      doc.text(`${index + 1}. ${q.question}`, margin, currentY);
      currentY += 10;
  
      q.options.forEach((option, i) => {
        doc.text(`${String.fromCharCode(65 + i)}. ${option}`, margin + 10, currentY);
        currentY += 6;
      });
  
      // Check if content exceeds the page, then add a new page
      if (currentY > doc.internal.pageSize.height - margin) {
        doc.addPage();
        currentY = margin;
      }
    });
  
    // Render SAQ Section
    doc.setFontSize(12);
    doc.text("Short Answer Questions (SAQs)", margin, currentY);
    currentY += 10;
  
    questions.saq.forEach((q, index) => {
      doc.text(`${index + 1}. ${q}`, margin, currentY);
      currentY += 10;
  
      // Check if content exceeds the page, then add a new page
      if (currentY > doc.internal.pageSize.height - margin) {
        doc.addPage();
        currentY = margin;
      }
    });
  
    // Render LAQ Section
    doc.setFontSize(10); // Reduce font size for LAQs to fit the content
    doc.text("Long Answer Questions (LAQs)", margin, currentY);
    currentY += 10;
  
    questions.laq.forEach((q, index) => {
      const splitText = doc.splitTextToSize(`${index + 1}. ${q}`, doc.internal.pageSize.width - 2 * margin);
      splitText.forEach((line, i) => {
        doc.text(line, margin, currentY);
        currentY += 6;
  
        // Check if content exceeds the page, then add a new page
        if (currentY > doc.internal.pageSize.height - margin) {
          doc.addPage();
          currentY = margin;
        }
      });
  
      // Check if content exceeds the page, then add a new page after the last question
      if (currentY > doc.internal.pageSize.height - margin) {
        doc.addPage();
        currentY = margin;
      }
    });
  
    // After rendering, restore the download button
    downloadButton.style.display = 'block';
  
    // Save the PDF
    doc.save('questions.pdf');
  };
  
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="form-heading">Generate Questions Form</h1>
        <h2 className="subject-heading">{questions.subject}</h2>

        {/* MCQs Section */}
        <div>
          <h2>Multiple Choice Questions (MCQs)</h2>
          <ul>
            {questions.mcq.map((q, index) => (
              <li key={index}>
                {q.question}
                <div className="options">
                  {q.options.map((option, i) => (
                    <div key={i}>
                      {String.fromCharCode(65 + i)}. {option}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* SAQs Section */}
        <div>
          <h2>Short Answer Questions (SAQs)</h2>
          <ul>
            {questions.saq.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>

        {/* LAQs Section */}
        <div>
          <h2>Long Answer Questions (LAQs)</h2>
          <ul>
            {questions.laq.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>

        {/* Download Button */}
        <button className="download-button" onClick={downloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}
