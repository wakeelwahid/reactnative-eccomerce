
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const loanTypes = [
    {
      id: 1,
      title: 'Gold Loan',
      subtitle: 'Quick loan against gold',
      icon: 'star',
      color: '#FFD700',
      bgColor: '#FFF8DC',
      rate: '8.5% onwards',
      maxAmount: '₹50 Lakhs'
    },
    {
      id: 2,
      title: 'Business Loan',
      subtitle: 'Grow your business',
      icon: 'business',
      color: '#4CAF50',
      bgColor: '#E8F5E8',
      rate: '12% onwards',
      maxAmount: '₹2 Crores'
    },
    {
      id: 3,
      title: 'Home Loan',
      subtitle: 'Own your dream home',
      icon: 'home',
      color: '#2196F3',
      bgColor: '#E3F2FD',
      rate: '7.5% onwards',
      maxAmount: '₹5 Crores'
    },
    {
      id: 4,
      title: 'Car Loan',
      subtitle: 'Drive your dream car',
      icon: 'car',
      color: '#FF5722',
      bgColor: '#FFF3E0',
      rate: '9% onwards',
      maxAmount: '₹1 Crore'
    },
    {
      id: 5,
      title: 'Personal Loan',
      subtitle: 'For all your needs',
      icon: 'person',
      color: '#9C27B0',
      bgColor: '#F3E5F5',
      rate: '10.5% onwards',
      maxAmount: '₹25 Lakhs'
    },
    {
      id: 6,
      title: 'Education Loan',
      subtitle: 'Invest in your future',
      icon: 'school',
      color: '#FF9800',
      bgColor: '#FFF8E1',
      rate: '8% onwards',
      maxAmount: '₹1.5 Crores'
    }
  ];

  const features = [
    { icon: 'flash', title: 'Instant Approval', desc: 'Get approved in minutes' },
    { icon: 'shield-checkmark', title: 'Secure Process', desc: '100% safe & secure' },
    { icon: 'cash', title: 'Best Rates', desc: 'Competitive interest rates' },
    { icon: 'time', title: '24/7 Support', desc: 'Round the clock assistance' }
  ];

  const handleLoanPress = (loanType: any) => {
    console.log('Loan selected:', loanType.title);
    // Navigation logic will be added here
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1565C0" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Good Morning!</Text>
            <Text style={styles.username}>Welcome to LoanApp</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Happy Customers</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>₹1000Cr+</Text>
            <Text style={styles.statLabel}>Loans Disbursed</Text>
          </View>
        </View>

        {/* Loan Types Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your Loan</Text>
          <View style={styles.loanGrid}>
            {loanTypes.map((loan) => (
              <TouchableOpacity
                key={loan.id}
                style={[styles.loanCard, { backgroundColor: loan.bgColor }]}
                onPress={() => handleLoanPress(loan)}
                activeOpacity={0.8}
              >
                <View style={[styles.loanIcon, { backgroundColor: loan.color }]}>
                  <Ionicons name={loan.icon as any} size={24} color="#fff" />
                </View>
                <Text style={styles.loanTitle}>{loan.title}</Text>
                <Text style={styles.loanSubtitle}>{loan.subtitle}</Text>
                <View style={styles.loanDetails}>
                  <Text style={styles.loanRate}>Rate: {loan.rate}</Text>
                  <Text style={styles.loanAmount}>Max: {loan.maxAmount}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureCard}>
                <Ionicons name={feature.icon as any} size={32} color="#1565C0" />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDesc}>{feature.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="calculator" size={24} color="#1565C0" />
              <Text style={styles.actionText}>EMI Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="document-text" size={24} color="#1565C0" />
              <Text style={styles.actionText}>Track Application</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="help-circle" size={24} color="#1565C0" />
              <Text style={styles.actionText}>Support</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Apply Now Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply for Loan Now</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#1565C0',
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
  },
  username: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
  profileButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  loanGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  loanCard: {
    width: '47%',
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  loanIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  loanTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  loanSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  loanDetails: {
    gap: 2,
  },
  loanRate: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '600',
  },
  loanAmount: {
    fontSize: 11,
    color: '#666',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  featureCard: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  actionText: {
    fontSize: 12,
    color: '#1565C0',
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  bottomPadding: {
    height: 100,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  applyButton: {
    backgroundColor: '#1565C0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
