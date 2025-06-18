
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Alert,
  Image,
  StatusBar 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LoanApplicationFormProps {
  loanType: string;
  onBack: () => void;
}

export default function LoanApplicationForm({ loanType, onBack }: LoanApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    idProofType: '',
    idProofNumber: '',
    address: '',
    pincode: '',
    monthlyIncome: '',
    loanAmount: '',
    purpose: ''
  });

  const [selectedIdProof, setSelectedIdProof] = useState('');
  const [selfieUploaded, setSelfieUploaded] = useState(false);
  const [idProofUploaded, setIdProofUploaded] = useState(false);

  const idProofOptions = [
    { label: 'Aadhaar Card', value: 'aadhaar', icon: 'card' },
    { label: 'Driving License', value: 'driving_license', icon: 'car' },
    { label: 'Passport', value: 'passport', icon: 'airplane' },
    { label: 'Voter ID', value: 'voter_id', icon: 'person' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelfieUpload = () => {
    Alert.alert(
      'Take Selfie',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => setSelfieUploaded(true) },
        { text: 'Gallery', onPress: () => setSelfieUploaded(true) },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const handleIdProofUpload = () => {
    Alert.alert(
      'Upload ID Proof',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => setIdProofUploaded(true) },
        { text: 'Gallery', onPress: () => setIdProofUploaded(true) },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.fullName || !formData.mobile || !formData.email || !selectedIdProof || !formData.idProofNumber) {
      Alert.alert('Error', 'Please fill all required fields (Name, Mobile, Email, ID Proof Type & Number)');
      return;
    }

    if (!selfieUploaded || !idProofUploaded) {
      Alert.alert('Error', 'Please upload your selfie and ID proof document');
      return;
    }

    Alert.alert(
      'Application Submitted!',
      `Your ${loanType} application has been submitted successfully. We will contact you within 24 hours.`,
      [{ text: 'OK', onPress: onBack }]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1565C0" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{loanType} Application</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
          <Text style={styles.progressText}>Step 1 of 2</Text>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={formData.fullName}
              onChangeText={(text) => handleInputChange('fullName', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              keyboardType="phone-pad"
              maxLength={10}
              value={formData.mobile}
              onChangeText={(text) => handleInputChange('mobile', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter complete address"
              multiline
              numberOfLines={3}
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pincode"
              keyboardType="numeric"
              maxLength={6}
              value={formData.pincode}
              onChangeText={(text) => handleInputChange('pincode', text)}
            />
          </View>
        </View>

        {/* ID Proof Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Identity Verification</Text>
          
          <Text style={styles.label}>Select ID Proof Type *</Text>
          <View style={styles.idProofGrid}>
            {idProofOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.idProofCard,
                  selectedIdProof === option.value && styles.selectedIdProof
                ]}
                onPress={() => setSelectedIdProof(option.value)}
              >
                <Ionicons 
                  name={option.icon as any} 
                  size={24} 
                  color={selectedIdProof === option.value ? '#1565C0' : '#666'} 
                />
                <Text style={[
                  styles.idProofText,
                  selectedIdProof === option.value && styles.selectedIdProofText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {selectedIdProof && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                {idProofOptions.find(opt => opt.value === selectedIdProof)?.label} Number *
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter ID number"
                value={formData.idProofNumber}
                onChangeText={(text) => handleInputChange('idProofNumber', text)}
              />
            </View>
          )}

          {/* Document Upload */}
          <View style={styles.uploadSection}>
            <TouchableOpacity 
              style={[styles.uploadButton, idProofUploaded && styles.uploadedButton]}
              onPress={handleIdProofUpload}
            >
              <Ionicons 
                name={idProofUploaded ? "checkmark-circle" : "cloud-upload"} 
                size={24} 
                color={idProofUploaded ? "#4CAF50" : "#1565C0"} 
              />
              <Text style={[styles.uploadText, idProofUploaded && styles.uploadedText]}>
                {idProofUploaded ? "ID Proof Uploaded" : "Upload ID Proof"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.uploadButton, selfieUploaded && styles.uploadedButton]}
              onPress={handleSelfieUpload}
            >
              <Ionicons 
                name={selfieUploaded ? "checkmark-circle" : "camera"} 
                size={24} 
                color={selfieUploaded ? "#4CAF50" : "#1565C0"} 
              />
              <Text style={[styles.uploadText, selfieUploaded && styles.uploadedText]}>
                {selfieUploaded ? "Selfie Uploaded" : "Take Selfie"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Financial Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Financial Details</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Monthly Income</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter monthly income"
              keyboardType="numeric"
              value={formData.monthlyIncome}
              onChangeText={(text) => handleInputChange('monthlyIncome', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Loan Amount Required</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter loan amount"
              keyboardType="numeric"
              value={formData.loanAmount}
              onChangeText={(text) => handleInputChange('loanAmount', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Purpose of Loan</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe the purpose"
              multiline
              numberOfLines={3}
              value={formData.purpose}
              onChangeText={(text) => handleInputChange('purpose', text)}
            />
          </View>
        </View>

        {/* Terms and Conditions */}
        <View style={styles.section}>
          <View style={styles.termsContainer}>
            <Ionicons name="information-circle" size={20} color="#1565C0" />
            <Text style={styles.termsText}>
              By submitting this application, you agree to our Terms & Conditions and Privacy Policy
            </Text>
          </View>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Application</Text>
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 34,
  },
  scrollView: {
    flex: 1,
  },
  progressContainer: {
    padding: 20,
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1565C0',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  idProofGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  idProofCard: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedIdProof: {
    borderColor: '#1565C0',
    backgroundColor: '#F3F8FF',
  },
  idProofText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  selectedIdProofText: {
    color: '#1565C0',
    fontWeight: '600',
  },
  uploadSection: {
    gap: 12,
    marginTop: 20,
  },
  uploadButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1565C0',
    borderStyle: 'dashed',
    gap: 10,
  },
  uploadedButton: {
    borderColor: '#4CAF50',
    backgroundColor: '#F8FFF8',
    borderStyle: 'solid',
  },
  uploadText: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: '600',
  },
  uploadedText: {
    color: '#4CAF50',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F3F8FF',
    padding: 16,
    borderRadius: 8,
    gap: 10,
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
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
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  submitButton: {
    backgroundColor: '#1565C0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
