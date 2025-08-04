import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Share2, LogOut, User } from "lucide-react";

const PDFViewer = ({ user, onLogout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-6"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-between items-center mb-8"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-theme rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-title">
              Tender Document
            </h1>
            <p className="text-gray-600">
              Confidential - Authorized Access Only
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-2xl">
            <User className="w-5 h-5 text-theme" />
            <span className="text-gray-700 font-medium">{user?.email}</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 glass-effect hover:glass-dark px-4 py-2 rounded-2xl transition-all duration-200"
          >
            <LogOut className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Logout</span>
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="glass-effect p-6 rounded-3xl">
            <h3 className="font-heading text-xl font-semibold text-title mb-6">
              Document Actions
            </h3>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 p-4 glass-dark rounded-2xl hover:bg-theme hover:text-white transition-all duration-200 group"
              >
                <Download className="w-5 h-5 group-hover:text-white" />
                <span className="font-medium">Download PDF</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 p-4 glass-dark rounded-2xl hover:bg-theme hover:text-white transition-all duration-200 group"
              >
                <Share2 className="w-5 h-5 group-hover:text-white" />
                <span className="font-medium">Share Document</span>
              </motion.button>
            </div>

            <div className="mt-8 p-4 glass-dark rounded-2xl">
              <h4 className="font-semibold text-title mb-2">Document Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Type:</span> RFP Document
                </p>
                <p>
                  <span className="font-medium">Size:</span> 2.4 MB
                </p>
                <p>
                  <span className="font-medium">Pages:</span> 24
                </p>
                <p>
                  <span className="font-medium">Updated:</span> Today
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="glass-effect p-8 rounded-3xl min-h-[600px]">
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-theme to-yellow-400 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-title mb-4">
                  Tender Document Viewer
                </h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  This is a secure document viewer. In a real implementation,
                  the PDF would be rendered here using a library like PDF.js or
                  react-pdf.
                </p>
                <div className="glass-dark p-6 rounded-2xl max-w-md mx-auto">
                  <h4 className="font-semibold text-title mb-3">
                    Sample Tender: Construction Project
                  </h4>
                  <div className="text-left text-sm text-gray-600 space-y-1">
                    <p>• Project Value: $2.5M</p>
                    <p>• Deadline: March 15, 2025</p>
                    <p>• Location: Downtown District</p>
                    <p>• Duration: 18 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PDFViewer;
