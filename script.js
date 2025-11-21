{\rtf1\ansi\ansicpg949\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u47784 \u45804  \u50676 \u44592 \
function openModal(modalId) \{\
    document.getElementById(modalId).style.display = "block";\
    document.body.style.overflow = "hidden"; // \uc0\u46263 \u48176 \u44221  \u49828 \u53356 \u47204  \u47561 \u44592 \
\}\
\
// \uc0\u47784 \u45804  \u45803 \u44592 \
function closeModal(modalId) \{\
    document.getElementById(modalId).style.display = "none";\
    document.body.style.overflow = "auto"; // \uc0\u49828 \u53356 \u47204  \u45796 \u49884  \u54728 \u50857 \
\}\
\
// \uc0\u47784 \u45804  \u48148 \u44645  \u53364 \u47533  \u49884  \u45803 \u44592 \
window.onclick = function(event) \{\
    if (event.target.className === 'modal') \{\
        event.target.style.display = "none";\
        document.body.style.overflow = "auto";\
    \}\
\}}