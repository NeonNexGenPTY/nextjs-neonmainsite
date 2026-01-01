"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ComparisonTableProps {
  plans: any[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ plans }) => {
  const [visibleCategories, setVisibleCategories] = useState<{ [key: string]: boolean }>({
    'Compute Resources': true,
    'Network': false,
    'Support': false,
    'Security & Reliability': false,
    'Communication': false,
    'Other Features': false,
  });

  // Define feature categories
  const getCategory = (featureText: string) => {
    const text = featureText.toLowerCase();
    if (text.includes('cpu') || text.includes('ram') || text.includes('memory') || text.includes('storage') || text.includes('disk')) {
      return 'Compute Resources';
    }
    if (text.includes('bandwidth') || text.includes('network') || text.includes('transfer') || text.includes('speed')) {
      return 'Network';
    }
    if (text.includes('support') || text.includes('help') || text.includes('assistance') || text.includes('response')) {
      return 'Support';
    }
    if (text.includes('backup') || text.includes('security') || text.includes('monitoring') || text.includes('ssl')) {
      return 'Security & Reliability';
    }
    if (text.includes('email') || text.includes('mail') || text.includes('notification')) {
      return 'Communication';
    }
    return 'Other Features';
  };

  // Group features by category
  const groupedFeatures: { [key: string]: string[] } = {};
  const allFeatures = Array.from(new Set(plans.flatMap(plan => plan.features.map((f: any) => f.text))));
  
  allFeatures.forEach(feature => {
    const category = getCategory(feature);
    if (!groupedFeatures[category]) {
      groupedFeatures[category] = [];
    }
    groupedFeatures[category].push(feature);
  });

  const categories = Object.keys(groupedFeatures);

  const toggleCategory = (category: string) => {
    setVisibleCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleAll = (checked: boolean) => {
    setVisibleCategories(Object.keys(visibleCategories).reduce((acc, cat) => {
      acc[cat] = checked;
      return acc;
    }, {} as { [key: string]: boolean }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Compare Plans
      </h3>

      {/* Category Toggles */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="select-all"
              checked={Object.values(visibleCategories).every(v => v)}
              onCheckedChange={toggleAll}
            />
            <Label htmlFor="select-all" className="text-white text-sm">Select All</Label>
          </div>
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={visibleCategories[category]}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={category} className="text-white text-sm">{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full border-white/10 bg-white/5 backdrop-blur-sm">
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead className="text-white font-bold">Features</TableHead>
              {plans.map(plan => (
                <TableHead key={plan.name} className="text-white font-bold text-center">
                  {plan.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.filter(category => visibleCategories[category]).map(category => (
              <React.Fragment key={category}>
                <TableRow className="border-white/10 bg-white/10">
                  <TableCell colSpan={plans.length + 1} className="text-white font-semibold text-lg py-2">
                    {category}
                  </TableCell>
                </TableRow>
                {groupedFeatures[category].map(feature => (
                  <TableRow key={feature} className="border-white/10">
                    <TableCell className="text-white pl-6">{feature}</TableCell>
                    {plans.map(plan => {
                      const hasFeature = plan.features.some((f: any) => f.text === feature && !f.opacity);
                      return (
                        <TableCell key={plan.name} className="text-center">
                          {hasFeature ? (
                            <span className="text-green-400 text-lg">✓</span>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default ComparisonTable;