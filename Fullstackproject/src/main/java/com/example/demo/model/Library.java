package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.DynamicUpdate;
@Entity
@DynamicUpdate
@Table(name = "library")
public class Library {

	// attributes--->column name of the table
		@Id // primary key of the table
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "BookId",length=4)
		private Integer bookId;

		@Column(name = "BookName",length=20, nullable = false)
		private String bookName;

		@Column(name = "AuthorName",length=20, nullable = false)
		private String authorName;

		@Column(name = "Journal",length=20, nullable = false)
		private String journal;
		
		@Column (name ="JournalId",nullable = false )
		private Integer journalId;
		

		@Column(name = "Edition", nullable = false)
		private Integer edition;

		@Column(name = "NoOfCopies", nullable = false)
		private Integer noOfCopies;
		
		
		
		//@OneToMany(cascade = CascadeType.ALL)
		//@JoinColumn(name ="deptId")
		//List < Department > dept = new ArrayList < > ();
		
		
		public Library() {
		
		}
		public Library(Integer bookId,String bookName,String authorName,String journal,Integer journalId, Integer edition ,Integer noOfCopies ) {
			super();
			this.bookId=bookId;
			this.bookName=bookName;
			this.authorName=authorName;
			this.journal=journal;
			this.journalId=journalId;
			this.edition=edition;
			this.noOfCopies=noOfCopies;
			
		}
		// public getters and setters for the above mentioned attributes
		public  Integer getBookId() {
			return bookId;
		}
		public void setBookId(Integer bookId) {
			this.bookId = bookId;
		}
		
		public String getBookName() {
			return bookName;
		}
		public void setBookName(String bookName) {
			this.bookName = bookName;
		}
		
		public String getAuthorName() {
			return authorName;
		}
		public void setAuthorName(String authorName) {
			this.authorName = authorName;
		}
		
		public String getJournal() {
			return journal;
		}
		public void setJournal(String journal) {
			this.journal = journal;
		}
		
		public Integer getJournalId() {
			return journalId;
		}
		public void setJournalId(Integer journalId) {
			this.journalId = journalId;
		}
		
		public Integer getEdition() {
			return edition;
		}
		public void setEdition(Integer edition) {
			this.edition = edition;
		}
		
		public Integer getNoOfCopies() {
			return noOfCopies;
		}
		public void setNoOfCopies(Integer noOfCopies) {
			this.noOfCopies = noOfCopies;
		}
		

	}


 
