import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

